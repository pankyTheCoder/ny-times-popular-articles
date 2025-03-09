import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';
import { ArticleType, getArticleImage } from '@/services/nytimes';

interface ArticleCardProps {
  article: ArticleType;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const imageUrl = getArticleImage(article);
  const formattedDate = new Date(article.published_date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <Link 
      to={`/article/${article.id}`}
      className="group block w-full h-full"
      data-cy="article-card"
    >
      <div className="h-full bg-white border border-border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md hover:translate-y-[-4px]">
        <div className="p-4 sm:p-6 flex flex-col h-full">
          <div className="flex items-center mb-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center">
              <Calendar size={14} className="mr-1" />
              {formattedDate}
            </span>
            <span className="mx-2">•</span>
            <span className="truncate">{article.section}</span>
          </div>
          
          <h2 className="text-base sm:text-lg font-medium mb-2 group-hover:text-primary transition-colors duration-300 text-balance">
            {article.title}
          </h2>
          
          <p className="text-xs sm:text-sm text-muted-foreground mb-4 line-clamp-2">
            {article.abstract}
          </p>
          
          {imageUrl && (
            <div className="relative mt-auto mb-4 rounded-md overflow-hidden aspect-[16/9]">
              <img
                src={imageUrl}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          )}
          
          <div className="mt-auto text-xs text-muted-foreground flex items-center">
            <User size={14} className="mr-1 flex-shrink-0" />
            <span className="truncate">{article.byline.replace('By ', '')}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
