import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const isDetailPage = location.pathname.includes('/article/');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-10 transition-all duration-300 ${
        scrolled 
          ? 'py-3 glass shadow-sm backdrop-blur-lg' 
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container px-4 mx-auto flex items-center justify-between">
        {isDetailPage ? (
          <div className="flex items-center">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center text-foreground mr-4 transition-transform duration-300 hover:-translate-x-1"
              aria-label="Go back"
            >
              <ArrowLeft size={20} />
            </button>
            <h1 className="text-lg font-medium truncate">Article</h1>
          </div>
        ) : (
          <h1 className="text-xl font-medium">NY Times Most Popular</h1>
        )}
        
        <div className="flex items-center">
          {!isDetailPage && (
            <span className="text-xs text-muted-foreground">
              The New York Times
            </span>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
