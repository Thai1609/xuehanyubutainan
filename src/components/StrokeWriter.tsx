import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import HanziWriter from 'hanzi-writer';

export interface StrokeWriterRef {
  animate: () => void;
  quiz: () => void;
}

interface StrokeWriterProps {
  character: string;
  size?: number;
  className?: string;
  padding?: number;
  strokeColor?: string;
  radicalColor?: string;
}

function SingleCharWriter({ char, size, padding, strokeColor, radicalColor, idx, currentWritersRef }: any) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = '';
    
    // HanziWriter might fail for non-chinese chars like punctuation
    try {
      const writer = HanziWriter.create(containerRef.current, char, {
        width: size,
        height: size,
        padding,
        strokeColor,
        radicalColor,
        showOutline: true,
        delayBetweenStrokes: 100,
        strokeAnimationSpeed: 2,
      });
      currentWritersRef.current[idx] = writer;
      // Animate immediately (simultaneously)
      writer.animateCharacter();
    } catch(e) {
      console.warn("Could not draw character with HanziWriter:", char, e);
    }
    
    return () => {
       if (currentWritersRef.current[idx]) {
          currentWritersRef.current[idx] = null;
       }
    };
  }, [char, size, padding, strokeColor, radicalColor, idx, currentWritersRef]);
  
  return <div ref={containerRef} />;
}

const StrokeWriter = forwardRef<StrokeWriterRef, StrokeWriterProps>(({ 
  character, 
  size = 100, 
  className = "", 
  padding = 5,
  strokeColor = '#10b981', // green-500
  radicalColor = '#ef4444'  // red-500
}, ref) => {
  const writersRef = useRef<(HanziWriter | null)[]>([]);

  useImperativeHandle(ref, () => ({
    animate: () => {
      writersRef.current.forEach((writer) => {
        if (writer) {
          writer.animateCharacter();
        }
      });
    },
    quiz: () => {
      // Start quiz on all characters sequentially or just the one being shown
      writersRef.current.forEach((writer) => {
        if (writer) writer.quiz();
      });
    }
  }));

  // Split into individual characters and ignore spaces/punctuation if needed
  // For simplicity, we just split. HanziWriter will throw a warning for punctuation, which we catch.
  const chars = (character || '').split('').filter(c => c.trim() !== '');

  const handleContainerClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    writersRef.current.forEach((writer) => {
      if (writer) {
        writer.animateCharacter();
      }
    });
  };

  return (
    <div 
      className={`cursor-pointer inline-flex flex-wrap gap-1 items-center justify-center ${className}`}
      onClick={handleContainerClick}
      title="Nhấp để xem lại nét vẽ"
    >
      {chars.map((char, index) => (
        <SingleCharWriter
          key={`${char}-${index}`}
          char={char}
          size={size}
          padding={padding}
          strokeColor={strokeColor}
          radicalColor={radicalColor}
          idx={index}
          currentWritersRef={writersRef}
        />
      ))}
    </div>
  );
});

export default StrokeWriter;

