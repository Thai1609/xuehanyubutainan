import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

interface ScrollableTabContainerProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export function ScrollableTabContainer({ 
  children, 
  className, 
  containerClassName 
}: ScrollableTabContainerProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const checkScroll = () => {
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
    };
    checkScroll();
    el.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);
    
    // Observe children mutations (like rendering components)
    const observer = new MutationObserver(checkScroll);
    observer.observe(el, { childList: true, subtree: true });
    
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
      observer.disconnect();
    }
  }, [children]);

  const scrollLeft = () => scrollRef.current?.scrollBy({ left: -200, behavior: 'smooth' });
  const scrollRight = () => scrollRef.current?.scrollBy({ left: 200, behavior: 'smooth' });

  return (
    <div className={cn("relative flex items-center group w-fit max-w-full", className)}>
      {canScrollLeft && (
        <button 
          onClick={scrollLeft}
          className="hidden md:flex absolute left-0 z-10 p-1.5 -ml-2 sm:-ml-4 bg-white border border-gray-100 rounded-full shadow-md text-gray-500 hover:text-orange-500 items-center justify-center transform hover:scale-110 transition-all"
        >
          <ChevronLeft size={16} />
        </button>
      )}
      <div 
        ref={scrollRef} 
        className={cn("flex overflow-x-auto hide-scrollbar scrollbar-hide no-scrollbar w-full", containerClassName)}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {children}
      </div>
      {canScrollRight && (
        <button 
          onClick={scrollRight}
          className="hidden md:flex absolute right-0 z-10 p-1.5 -mr-2 sm:-mr-4 bg-white border border-gray-100 rounded-full shadow-md text-gray-500 hover:text-orange-500 items-center justify-center transform hover:scale-110 transition-all"
        >
          <ChevronRight size={16} />
        </button>
      )}
    </div>
  );
}
