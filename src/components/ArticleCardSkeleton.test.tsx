import { render, screen } from '@testing-library/react';
import ArticleCardSkeleton from './ArticleCardSkeleton';

describe('ArticleCardSkeleton', () => {
  it('renders skeleton elements', () => {
    render(<ArticleCardSkeleton />);
    
    const skeletonElements = screen.getAllByRole('status');
    expect(skeletonElements.length).toBeGreaterThan(0);
  });

  it('has the correct structure', () => {
    const { container } = render(<ArticleCardSkeleton />);
    
    expect(container.querySelector('.bg-white')).toBeInTheDocument();
    expect(container.querySelector('.border-border')).toBeInTheDocument();
    expect(container.querySelector('.rounded-lg')).toBeInTheDocument();
    
    const imageSkeleton = container.querySelector('.h-48');
    expect(imageSkeleton).toBeInTheDocument();
  });
});
