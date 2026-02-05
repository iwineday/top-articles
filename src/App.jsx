import React, { useState } from 'react';
import ArticleList from './components/ArticleList';
import SplitReader from './components/SplitReader';
import { articles } from './data';

function App() {
  const [selectedArticleId, setSelectedArticleId] = useState(articles[0].id);

  const selectedArticle = articles.find(a => a.id === selectedArticleId);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <ArticleList 
        articles={articles} 
        selectedId={selectedArticleId} 
        onSelect={setSelectedArticleId} 
      />
      <div className="flex-1 h-full">
        <SplitReader article={selectedArticle} />
      </div>
    </div>
  );
}

export default App;
