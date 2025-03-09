import React from 'react';
import { Calendar, User, Tag, ExternalLink } from 'lucide-react';
import { ArticleType, getArticleImage } from '@/services/nytimes';
import Loader from './Loader';

interface ArticleDetailProps {
  article: ArticleType | null;
  isLoading: boolean;
  error: Error | null;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ article, isLoading, error }) => {
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <Loader size="large" />
        <p className="mt-4 text-muted-foreground animate-pulse">Loading article...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <div className="bg-red-50 text-red-500 p-6 rounded-lg inline-block mx-auto">
          <h3 className="text-lg font-medium mb-2">Failed to load article</h3>
          <p className="text-sm">{error.message}</p>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="text-center py-20">
        <p className="text-muted-foreground">Article not found.</p>
      </div>
    );
  }

  const imageUrl = getArticleImage(article);
  const formattedDate = new Date(article.published_date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="max-w-3xl mx-auto animate-fade-in">
      {/* Article Header */}
      <header className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-medium mb-4 text-balance">{article.title}</h1>
        
        <div className="flex flex-wrap gap-y-2 text-sm text-muted-foreground mb-6">
          <div className="flex items-center mr-4">
            <User size={16} className="mr-1" />
            <span>{article.byline.replace('By ', '')}</span>
          </div>
          
          <div className="flex items-center mr-4">
            <Calendar size={16} className="mr-1" />
            <span>{formattedDate}</span>
          </div>
          
          <div className="flex items-center">
            <Tag size={16} className="mr-1" />
            <span>{article.section}</span>
            {article.subsection && (
              <span className="ml-1">/ {article.subsection}</span>
            )}
          </div>
        </div>
      </header>

      {/* Article Image */}
      {imageUrl && (
        <div className="mb-8 rounded-lg overflow-hidden aspect-[16/9]">
          <img
            src={imageUrl}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Article Content */}
      <div className="prose max-w-none">
        <p className="text-lg leading-relaxed mb-6">{article.abstract}</p>
        
        {/* If there are any facets, display them as tags */}
        {(article.des_facet.length > 0 || article.per_facet.length > 0) && (
          <div className="my-8">
            <h2 className="text-lg font-medium mb-3">Topics</h2>
            <div className="flex flex-wrap gap-2">
              {[...article.des_facet, ...article.per_facet].slice(0, 8).map((facet, index) => (
                <span 
                  key={index} 
                  className="bg-secondary px-3 py-1 rounded-full text-xs text-secondary-foreground"
                >
                  {facet}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {/* External link to original article */}
        <div className="mt-10 pt-6 border-t border-border">
          <a 
            href={article.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md transition-all hover:bg-primary/90"
          >
            <ExternalLink size={16} className="mr-2" />
            Read full article on NY Times
          </a>
        </div>
      </div>
    </article>
  );
};

export default ArticleDetail;
