import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';
import Header from '../components/Header';
import ArticleDetail from '../components/ArticleDetail';
import { fetchMostPopularArticles, ArticleType } from '../services/nytimes';

const ArticleDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: article, isLoading, error } = useQuery({
    queryKey: ['article', id],
    queryFn: async (): Promise<ArticleType | null> => {
      try {
        const articles = await fetchMostPopularArticles(7);
        
        const foundArticle = articles.find(
          (article) => article.id.toString() === id
        );
        
        if (foundArticle) {
          return foundArticle;
        } else {
          toast.error('Article not found');
          navigate('/');
          return null;
        }
      } catch (err) {
        console.error('Error loading article:', err);
        toast.error('Could not load article details. Please try again later.');
        throw err;
      }
    },
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <ArticleDetail 
            article={article} 
            isLoading={isLoading} 
            error={error instanceof Error ? error : error ? new Error('Unknown error') : null} 
          />
        </div>
      </main>
    </div>
  );
};

export default ArticleDetailPage;
