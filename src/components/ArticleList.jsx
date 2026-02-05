import React from 'react';

const ArticleList = ({ articles, selectedId, onSelect }) => {
  return (
    <div className="w-80 h-full bg-gray-900 text-white overflow-y-auto flex-shrink-0">
      <div className="p-6 border-b border-gray-800">
        <h2 className="text-xl font-bold tracking-wider">DAN KOE READER</h2>
        <p className="text-gray-500 text-xs mt-1">Bilingual Archive</p>
      </div>
      <ul>
        {articles.map((article) => (
          <li 
            key={article.id}
            onClick={() => onSelect(article.id)}
            className={`p-6 cursor-pointer border-b border-gray-800 transition-colors hover:bg-gray-800 ${
              selectedId === article.id ? 'bg-gray-800 border-l-4 border-white' : 'border-l-4 border-transparent'
            }`}
          >
            <h3 className="font-semibold text-sm mb-1">{article.title}</h3>
            <p className="text-xs text-gray-400 line-clamp-2">{article.title_zh}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;
