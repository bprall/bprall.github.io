import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FrontPageHeader, FrontPageContact, Project, NewsItem, FrontPageParagraph } from '../utils/interfaces';

const RenderFrontPage: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [header, setHeader] = useState<FrontPageHeader | null>(null);
  const [contact, setContact] = useState<FrontPageContact | null>(null);
  const [paragraphs, setParagraphs] = useState<FrontPageParagraph[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const paragraphRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../../data.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setHeader(data.frontPage.header);
        setContact(data.frontPage.contact);
        setParagraphs(data.frontPage.paragraphs || []);
        setProjects(data.projects || []);
        setNews(data.news || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    document.title = 'Blake Prall';
  }, []);

  const handleIntersection = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting && paragraphRefs.current[index]) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.25
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    paragraphRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [paragraphs]);

  if (loading) {
    return <div/>;
  }

  return (
    <div id="home">
      {header && (
        <div id="home-header-container">
          <div>
            <p id="home-title">{header.title}</p>
          </div>
          <div id="home-header-text">
            <p dangerouslySetInnerHTML={{ __html: header.text[0] || '' }} />
            <p dangerouslySetInnerHTML={{ __html: header.text[1] || '' }} />
          </div>
        </div>
      )}
      <div id="home-content-container">
        <section className="home-section-container">
          <div className="home-section-header">
            <p>Projects</p>
            <Link to="/projects">
              <button>All Projects</button>
            </Link>
          </div>
          {projects.length > 0 && (
            <div className="home-projects-grid">
              {projects.slice(0, 6).map((project) => (
                <div className="home-card" key={project.id}>
                  <div className="home-card-content">
                    <h2 className="home-card-title">{project.title}</h2>
                    <p className="home-card-description">{project.frontPageDesc || project.description}</p>
                  </div>
                  <div className="home-card-buttons">
                    <Link to={`/projects/${project.id}`} className="home-card-button">Page</Link>
                    {project.sourceLink && (
                      <a href={project.sourceLink} className="home-card-button" target="_blank" rel="noopener noreferrer">
                        Source
                      </a>
                    )}
                    {project.siteLink && (
                      <a href={project.siteLink} className="home-card-button" target="_blank" rel="noopener noreferrer">
                          Visit
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
        <section className="home-section-container">
          <div className="home-section-header">
            <p>News</p>
            <Link to="/news">
              <button>All News</button>
            </Link>
          </div>
          {news.length > 0 && (
            <ul id="home-news-list">
              {news.slice(0, 10).map((item, index) => (
                <a href="/about" className="home-news-row-link" key={index}>
                  <div className="home-news-row">
                    <div className="home-news-title">{item.title}</div>
                    <div className="home-news-date">{item.date}</div>
                  </div>
                </a>
              ))}
            </ul>
          )}
        </section>
        <section className="home-section-container">
          {paragraphs.length > 0 && (
            paragraphs.map((paragraph, index) => (
              <div
                className="home-paragraph-card"
                key={index}
                ref={(el) => paragraphRefs.current[index] = el!}
              >
                <div className="hover-bar"></div>
                {paragraph.link ? (
                  <div className="home-section-header">
                    <Link to={paragraph.link} className="home-card-link">
                      <p>{paragraph.title}</p>
                    </Link>
                  </div>
                ) : (
                  <div className="home-section-header">
                    <p className="home-section-header">{paragraph.title}</p>
                  </div>
                )}
                <div className='home-paragraph-content'>
                  <p>{paragraph.content}</p>
                </div>
              </div>
            ))
          )}
        </section>
      </div>
      {contact && (
        <section className="home-section-container">
          <div className='home-section-header'>
            <p>Contact Me</p>
          </div>
          <div id="about">
            <Link to="/contact" className="about-card">
              <div className="hover-bar"></div>
              <img id="contact-photo" src={contact.photo} alt={`${contact.contactName}'s photo`} />
              <div id='contact-name'>
                <p>{contact.contactName}<i className="bi bi-chevron-right"></i></p>
              </div>
              <div id='contact-content'>
                <p>{contact.shortSummary}</p>
              </div>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
};

export default RenderFrontPage;
