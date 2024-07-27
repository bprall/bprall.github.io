import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import DateClock from '../components/dateClock';
import { FrontPageParagraph, FrontPageContact } from '../utils/interfaces';

const RenderFrontPage: React.FC = () => {

  const [paragraphs, setParagraphs] = useState<FrontPageParagraph[]>([]);
  const [contact, setContact] = useState<FrontPageContact | null>(null);
  const [isFixed, setIsFixed] = useState(false);

  const paragraphRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../../data.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setContact(data.frontPage.contact || null);
        setParagraphs(data.frontPage.paragraphs || []);
      } catch (error) {
        console.error('Error fetching data:', error);
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

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsFixed(scrollTop > 48); 
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="home">
      <div className="home-header-container" id="features-header">
        <div>
          <p>My Personal Site</p>
          <h1>Blake Prall</h1>
        </div>
      </div>
      <div id="home-content-container">
        <div id="home-text-container">
          {paragraphs.length > 0 ? (
            paragraphs.map((paragraph, index) => (
              <div
                className="home-card"
                key={index}
                ref={(el) => paragraphRefs.current[index] = el!}
              >
                <div className="hover-bar"></div>
                {paragraph.link ? (
                  <Link to={paragraph.link} className="home-card-link">
                    <p className="home-card-title">{paragraph.title}</p>
                  </Link>
                ) : (
                  <p className="home-card-title">{paragraph.title}</p>
                )}
                <p className="home-card-content">{paragraph.content}</p>
              </div>
            ))
          ) : (
            <p>No content available</p>
          )}
        </div>
        <div
          id="date-clock-container"
          className={isFixed ? 'fixed' : ''}
        >
          <DateClock />
        </div>
      </div>
      {contact && (
        <section id='contact-me'>
          <div className="home-header-container" id="about-header">
            <div>
              <h3>Contact Me</h3>
            </div>
          </div>
          <div id="about">
            <Link to="/contact" className="about-card">
              <div className="hover-bar"></div>
              <img id="contact-photo" src={contact.photo} alt={`${contact.contactName}'s photo`} />
              <h4>{contact.contactName}<i className="bi bi-chevron-right"></i></h4>
              <p>{contact.shortSummary}</p>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
};

export default RenderFrontPage;
