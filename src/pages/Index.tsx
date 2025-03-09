import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';
import Header from '../components/Header';
import ArticleList from '../components/ArticleList';
import PeriodSelector from '../components/PeriodSelector';
import { fetchMostPopularArticles } from '../services/nytimes';
import { useArticleStore } from '../store/articleStore';

const Index = () => {
  const { 
    articles, 
    selectedPeriod, 
    isLoading, 
    error, 
    setPeriod, 
    setArticles, 
    setLoading, 
    setError 
  } = useArticleStore();

  const { data, isLoading: queryLoading, error: queryError } = useQuery({
    queryKey: ['articles', selectedPeriod],
    queryFn: () => fetchMostPopularArticles(selectedPeriod),
  });

  useEffect(() => {
    setLoading(queryLoading);
    
    if (queryError) {
      setError(queryError instanceof Error ? queryError : new Error('Failed to load articles'));
      toast.error('Could not load articles. Please try again later.');
    } else if (data) {
      setArticles(data);
      setError(null);
    }
  }, [data, queryLoading, queryError, setArticles, setError, setLoading]);

  const handlePeriodChange = (newPeriod: 1 | 7 | 30) => {
    setPeriod(newPeriod);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 sm:mb-10 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-2">NY Times Most Popular</h1>
            <p className="text-muted-foreground text-sm sm:text-base">
              Explore the most popular articles from The New York Times
            </p>
          </div>
          
          <PeriodSelector currentPeriod={selectedPeriod} onChange={handlePeriodChange} />
          
          <ArticleList 
            articles={articles} 
            isLoading={isLoading} 
            error={error}
          />
        </div>
      </main>
    </div>
  );
};

export default Index;
