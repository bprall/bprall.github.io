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
          <h3>{about.education}</h3>
          <p>
            {about.majors[0]} <br/>
            {about.majors[1]}
          </p>
        </section>
        <section id="news" className="news">
          <h3>News</h3>
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
              <li key={index}>
                <strong>{item.title}</strong> - <span>{item.date}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div className="right-side">
        {about.moreDetails.map((detail, index) => (
          <section key={index} className="more-detail">
            <h3>{detail.title}</h3>
            <p>{detail.content}</p>
          </section>
        ))}
      </div>
    </section>
  );
}

export default AboutPage;
