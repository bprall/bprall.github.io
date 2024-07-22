import { useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import data from '../../data.json';

function RenderFrontPage() {
    const cards = data.frontPage || [];

    const cardRefs = cards.map(() => useRef<HTMLDivElement>(null));

    const handleIntersection = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting && cardRefs[index].current) {
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

        cardRefs.forEach((ref) => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, [cardRefs]);

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
                        <div className="home-card" key={index} ref={cardRefs[index]}>
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
            </div>
            <div className="home-header-container" id="about-header">
                <div>
                    <h3>Contact Me</h3>
                </div>
            </div>
            <div id="about">
                <div className="about-card" onClick={() => window.location.href = "/contact"}>
                    <div className="hover-bar"></div>
                    <img src="https://cdn.glitch.global/b0561b3a-67fa-44de-99d8-728d82b14013/1701894420208%20(2).jpg?v=1715368201737" />
                    <h4>Blake Prall<i className="bi bi-chevron-right"></i></h4>
                    <p>Blake is a recent Graduate from Boston College with a double major in computer science.</p>
                </div>
            </div>
        </div>
    );
}

export default RenderFrontPage;
