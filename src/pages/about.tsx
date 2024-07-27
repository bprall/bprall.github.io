import React, { useState, useEffect } from 'react';
import { NewsItem, About } from '../utils/interfaces';

const RenderAbout: React.FC = () => {
  const [about, setAbout] = useState<About | null>(null);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../../data.json');
        const data = await response.json();
        setAbout(data.about);
        setNews(data.news || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    document.title = 'About | Blake Prall';
  }, []);

  const filteredNews = news.filter(newsItem =>
    newsItem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    newsItem.date.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <section className="about">
      <div className="left-side">
        {about && (
          <>
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
          </>
        )}
      </div>
      <section className="right-side">
        {about && (
          <>
            <div className="short-summary" dangerouslySetInnerHTML={{ __html: about.selfSummary || '' }}/>
            {about.moreDetails.map((detail, index) => (
              <section key={index} className="more-detail">
                <h3 id="detail-title">{detail.title}</h3>
                <p id="detail-content">{detail.content}</p>
              </section>
            ))}
          </>
        )}
      </section>
    </section>
  );
}

export default RenderAbout;