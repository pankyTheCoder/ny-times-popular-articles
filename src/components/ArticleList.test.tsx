import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ArticleList from './ArticleList';
import { mockArticles } from '@/utils/mockData';

describe('ArticleList', () => {
  it('renders loading state', () => {
    render(<ArticleList articles={[]} isLoading={true} error={null} />);
    
    const skeletonElements = screen.getAllByRole('status');
    expect(skeletonElements.length).toBeGreaterThan(0);
  });

  it('renders error state', () => {
    const testError = new Error('Test error message');
    render(<ArticleList articles={[]} isLoading={false} error={testError} />);
    
    expect(screen.getByText('Failed to load articles')).toBeInTheDocument();
    expect(screen.getByText('Test error message')).toBeInTheDocument();
  });

  it('renders empty state', () => {
    render(<ArticleList articles={[]} isLoading={false} error={null} />);
    
    expect(screen.getByText('No articles found.')).toBeInTheDocument();
  });

  it('renders articles', () => {
    render(
      <BrowserRouter>
        <ArticleList articles={mockArticles} isLoading={false} error={null} />
      </BrowserRouter>
    );
    
    expect(screen.getByText('First Test Article')).toBeInTheDocument();
    expect(screen.getByText('Second Test Article')).toBeInTheDocument();
    expect(screen.getByText('This is the first test article')).toBeInTheDocument();
    expect(screen.getByText('This is the second test article')).toBeInTheDocument();
  });
});
