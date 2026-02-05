import React, { useRef, useEffect } from 'react';

const SplitReader = ({ article }) => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const isSyncingLeft = useRef(false);
  const isSyncingRight = useRef(false);

  useEffect(() => {
    const leftEl = leftRef.current;
    const rightEl = rightRef.current;

    const handleLeftScroll = () => {
      if (!isSyncingLeft.current) {
        isSyncingRight.current = true;
        const percentage = leftEl.scrollTop / (leftEl.scrollHeight - leftEl.clientHeight);
        rightEl.scrollTop = percentage * (rightEl.scrollHeight - rightEl.clientHeight);
      }
      isSyncingLeft.current = false;
    };

    const handleRightScroll = () => {
      if (!isSyncingRight.current) {
        isSyncingLeft.current = true;
        const percentage = rightEl.scrollTop / (rightEl.scrollHeight - rightEl.clientHeight);
        leftEl.scrollTop = percentage * (leftEl.scrollHeight - leftEl.clientHeight);
      }
      isSyncingRight.current = false;
    };

    leftEl?.addEventListener('scroll', handleLeftScroll);
    rightEl?.addEventListener('scroll', handleRightScroll);

    return () => {
      leftEl?.removeEventListener('scroll', handleLeftScroll);
      rightEl?.removeEventListener('scroll', handleRightScroll);
    };
  }, [article]);

  if (!article) return <div className="flex items-center justify-center h-full text-gray-400">Select an article to start reading</div>;

  return (
    <div className="flex h-full">
      {/* Left Column (English) */}
      <div 
        ref={leftRef}
        className="w-1/2 h-full overflow-y-auto p-8 border-r border-gray-200 bg-white"
      >
        <h1 className="text-3xl font-bold mb-6 text-gray-900">{article.title}</h1>
        <div className="prose max-w-none text-gray-800 leading-relaxed whitespace-pre-line font-serif text-lg">
          {article.content_en}
        </div>
      </div>

      {/* Right Column (Chinese) */}
      <div 
        ref={rightRef}
        className="w-1/2 h-full overflow-y-auto p-8 bg-stone-50"
      >
        <h1 className="text-3xl font-bold mb-6 text-gray-900">{article.title_zh}</h1>
        <div className="prose max-w-none text-gray-800 leading-relaxed whitespace-pre-line font-serif text-lg">
          {article.content_zh}
        </div>
      </div>
    </div>
  );
};

export default SplitReader;
