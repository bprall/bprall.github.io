import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import DateClock from '../components/dateClock';
import { FrontPage, FrontPageSection } from '../utils/interfaces';

const RenderFrontPage: React.FC = () => {
  const [cards, setCards] = useState<FrontPageSection[]>([]);
  const [isFixed, setIsFixed] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);

  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../../data.json');
        const data: FrontPage = await response.json();
        setCards(data.frontPage || []);
        setDataLoaded(true);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleIntersection = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting && cardRefs.current[index]) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: .25
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    cardRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [cards]);

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
          {cards.map((card, index) => (
            <div
              className="home-card"
              key={index}
              ref={(el) => cardRefs.current[index] = el!}
            >
              <div className="hover-bar"></div>
              {card.link ? (
                <Link to={card.link} className="home-card-link">
                  <p className="home-card-title">{card.title}</p>
                </Link>
              ) : (
                <p className="home-card-title">{card.title}</p>
              )}
              <p className="home-card-content">{card.content}</p>
            </div>
          ))}
        </div>
        <div
          id="date-clock-container"
          className={isFixed ? 'fixed' : ''}
        >
          <DateClock />
        </div>
      </div>
      {dataLoaded && (
        <section id='contact-me'>
          <div className="home-header-container" id="about-header">
            <div>
              <h3>Contact Me</h3>
            </div>
          </div>
          <div id="about">
            <Link to="/contact" className="about-card">
              <div className="hover-bar"></div>
              <img src="https://cdn.glitch.global/b0561b3a-67fa-44de-99d8-728d82b14013/1701894420208%20(2).jpg?v=1715368201737" />
              <h4>Blake Prall<i className="bi bi-chevron-right"></i></h4>
              <p>Blake is a recent graduate from Boston College with a double major in computer science and neuroscience.</p>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
};

export default RenderFrontPage;