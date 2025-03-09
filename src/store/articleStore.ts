import { create } from 'zustand';
import { ArticleType } from '../services/nytimes';

interface ArticleState {
  articles: ArticleType[];
  selectedPeriod: 1 | 7 | 30;
  isLoading: boolean;
  error: Error | null;
  
  setArticles: (articles: ArticleType[]) => void;
  setPeriod: (period: 1 | 7 | 30) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: Error | null) => void;
}

export const useArticleStore = create<ArticleState>((set) => ({
  articles: [],
  selectedPeriod: 1,
  isLoading: false,
  error: null,
  
  setArticles: (articles) => set({ articles }),
  setPeriod: (period) => set({ selectedPeriod: period }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
}));
