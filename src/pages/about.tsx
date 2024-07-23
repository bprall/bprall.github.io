import React, { useState } from 'react';
import data from '../../data.json';
import { NewsItem, About } from '../utils/interfaces';

const AboutPage: React.FC = () => {
  const about: About = data.about;
  const initialNews: NewsItem[] = data.news;

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredNews, setFilteredNews] = useState<NewsItem[]>(initialNews);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = initialNews.filter(newsItem =>
      newsItem.title.toLowerCase().includes(value) ||
      newsItem.date.toLowerCase().includes(value)
    );
    setFilteredNews(filtered);
  };

  return (
    <section className="about">
      <div className="left-side">
        <center><img src={about.photo} alt="Your Photo" className="about-photo" /></center>
        <h1 className="about-name">{about.name}</h1>
        <section id="education" className="education">
          <h3 id='college'>{about.education}</h3>
          <p id='majors'>
            {about.majors[0]} <br/>
            {about.majors[1]}
          </p>
        </section>
        <section id="news" className="news">
          <h2 id='news-title'>News</h2>
          <input
            type="text"
            name="news"
            placeholder="Search News..."
            value={searchTerm}
            onChange={handleSearch}
            className="news-search"
          />
          <ul className="news-list">
            {filteredNews.map((item, index) => (
                <div className="news-row" key={index}>
                    <div className="news-title">{item.title}</div>
                    <div className="news-date">{item.date}</div>
                </div>
            ))}
          </ul>
        </section>
      </div>
      <section className="right-side">
        <div className="short-summary" dangerouslySetInnerHTML={{ __html: about.selfSummary || '' }}/>
        {about.moreDetails.map((detail, index) => (
          <section key={index} className="more-detail">
            <h3 id="detail-title">{detail.title}</h3>
            <p id="detail-content">{detail.content}</p>
          </section>
        ))}
      </section>
    </section>
  );
}

export default AboutPage;
