import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import ArticleCard from './ArticleCard';
import { mockArticle } from '@/utils/mockData';

vi.mock('../services/nytimes', async () => {
  const actual = await vi.importActual('../services/nytimes');
  return {
    ...actual as any,
    getArticleImage: () => 'https://example.com/image-large.jpg',
  };
});

describe('ArticleCard', () => {
  it('renders article information correctly', () => {
    render(
      <BrowserRouter>
        <ArticleCard article={mockArticle} />
      </BrowserRouter>
    );
    
    expect(screen.getByText('Test Article Title')).toBeInTheDocument();
    
    expect(screen.getByText('This is a test article abstract')).toBeInTheDocument();
    
    expect(screen.getByText('Technology')).toBeInTheDocument();
    
    expect(screen.getByText('Test Author')).toBeInTheDocument();
    
    const image = screen.getByAltText('Test Article Title');
    expect(image).toBeInTheDocument();
    expect(image.getAttribute('src')).toBe('https://example.com/image-large.jpg');
  });

  it('renders a link to the article detail page', () => {
    render(
      <BrowserRouter>
        <ArticleCard article={mockArticle} />
      </BrowserRouter>
    );
    
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/article/123456');
  });
});
