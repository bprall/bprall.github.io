import React from 'react';
import { NewsItem, NewsData } from "../utils/interfaces";

const renderNewsItems = (item: NewsItem) => (
  <div className="news-row" key={item.title}>
    <div className="news-title">{item.title}</div>
    <div className="news-date">{item.date}</div>
  </div>
);

const RenderNews: React.FC<NewsData> = ({ news }) => (
  <section id="news">
    <h2>News</h2>
    <div className="search">
      <input type="search" name="news" placeholder="Search News..." />
    </div>
    <div className="news-list">
      {news.map(renderNewsItems)}
    </div>
  </section>
);

export default RenderNews;
