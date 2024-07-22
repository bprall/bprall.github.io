import React from 'react';
import { Link } from 'react-router-dom';
import data from '../../data.json';
import { ChangeIcon } from '../utils/mouseEvents';
import '../styles/contact.css';

const about = data.about;

const RenderContact: React.FC = () => {
  return (
    <section className="contact">
      <div className="grid-container">
        <div className="feedback-form">
          <h2>Feedback Form</h2>
          <p>Let me know what you think of the site or give suggestions by filling out the form below:</p>
          <form action="mailto:brprall3@gmail.com.com" method="post" encType="text/plain">
            <input type="text" id="name" name="name" placeholder="Your Full Name" required />
            <input type="email" id="email" name="email" placeholder="Your Email" required />
            <textarea id="feedback" name="feedback" rows={4} placeholder="Your Feedback" required></textarea>
            <button type="submit">Send Feedback</button>
          </form>
        </div>

        <div className="contact-info">
          <div id="location"> 
            <h4>Location</h4>       
            <p className="contact-text">{about.address}</p>
          </div>
          <div id="contact-details">
            <h4>Contact Details</h4>
            <p className="contact-text">Email: &nbsp;&nbsp;
            <a className="contact-link" href={`mailto:${about.email}`}>{about.email}</a></p><br />
            <p className="contact-text">Phone: &nbsp;&nbsp;
            <a className="contact-link" href={`tel:${about.phone}`}>{about.phone}</a></p>
          </div>
          <div id="socials">
            <h4>Socials</h4>
            <Link
              className='social-links social-links-icons'
              to={about.github[0]}
              target="_blank"
              onMouseEnter={() => ChangeIcon('.icon', 'icon-github-logo', 'icon-github-reverse')}
              onMouseLeave={() => ChangeIcon('.icon', 'icon-github-reverse', 'icon-github-logo')}
            >
              <i className="icon icon-github-logo"></i>
            </Link>
            <Link
              className='social-links social-links-icons'
              to={about.linkedin[0]}
              target="_blank"
              onMouseEnter={() => ChangeIcon('.icon', 'icon-linkedin-logo', 'icon-linkedinreverse')}
              onMouseLeave={() => ChangeIcon('.icon', 'icon-linkedin-reverse', 'icon-linkedin-logo')}
            >
              <i className="icon icon-linkedin-logo"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RenderContact;
