import { useLayoutEffect, useRef, useState } from 'react';

export const Quote = ({ author, quote }: { author: string; quote: string }) => {
  const pRef = useRef<HTMLParagraphElement>(null);
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const ref = pRef.current?.getBoundingClientRect();
    setBoxSize({ height: ref?.height || 0, width: ref?.width || 0 });
  }, [quote]);

  return (
    <>
      <blockquote className="blockquote text-end" style={{ display: 'flex' }}>
        <p ref={pRef} className="mb-1">
          {quote}
        </p>
        <footer className="blockquote-footer"> {author} </footer>
      </blockquote>

      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};
