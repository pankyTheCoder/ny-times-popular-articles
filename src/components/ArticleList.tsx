import React from 'react';
import ArticleCard from './ArticleCard';
import ArticleCardSkeleton from './ArticleCardSkeleton';
import { ArticleType } from '../services/nytimes';

interface ArticleListProps {
  articles: ArticleType[];
  isLoading: boolean;
  error: Error | null;
}

const ArticleList: React.FC<ArticleListProps> = ({ articles, isLoading, error }) => {
  if (error) {
    return (
      <div className="text-center py-20">
        <div className="bg-red-50 text-red-500 p-6 rounded-lg inline-block mx-auto">
          <h3 className="text-lg font-medium mb-2">Failed to load articles</h3>
          <p className="text-sm">{error.message}</p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="animate-fade-in">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="animate-pulse">
              <ArticleCardSkeleton />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-muted-foreground">No articles found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
      {articles.map((article) => (
        <div key={article.id} className="animate-slide-up">
          <ArticleCard article={article} />
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
