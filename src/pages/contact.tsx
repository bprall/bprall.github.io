import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import ChangeIcon from '../utils/mouseEvents';
import { Contact } from '../utils/interfaces';

const RenderContact: React.FC = () => {
  const [contact, setContact] = useState<Contact>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../../data.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setContact(data.contact || null);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

  useEffect(() => {
    document.title = 'Contact | Blake Prall';
  }, []);

  if (!contact) {
    return <div/>;
  }

  return (
    <section className="contact">
      <div className="grid-container">
        <div className="feedback-form">
          <div id="feedback-form-header">
            Feedback Form
          </div>
          <div id="feedback-form-info">
            Let me know what you think of the site or give suggestions by filling out the form below:
          </div>
          <form action="mailto:brprall3@gmail.com.com" method="post" encType="text/plain">
            <input type="text" id="name" name="name" placeholder="Your Full Name" required />
            <input type="email" id="email" name="email" placeholder="Your Email" required />
            <textarea id="feedback" name="feedback" rows={4} placeholder="Your Feedback" required></textarea>
            <button type="submit">Send Feedback</button>
          </form>
        </div>

        <div className="contact-info">
          <div id="location">
            <div className="contact-info-header">
              <p className='contact-info-header-text'>Location</p>  
            </div>   
            <p className="contact-text">{contact.address[0]}</p>
          </div>
          <div id="contact-details">
            <div className="contact-info-header">
              <p className='contact-info-header-text'>Contact Details</p>
            </div>
            <p className="contact-text">Email: &nbsp;&nbsp;
            <a className="contact-link" href={`mailto:${contact.email[0]}`}>{contact.email[0]}</a></p><br />
            <p className="contact-text">Phone: &nbsp;&nbsp;
            <a className="contact-link" href={`tel:${contact.phone[0]}`}>{contact.phone[0]}</a></p>
          </div>
          <div id="socials">
            <div className="contact-info-header">
              <p className='contact-info-header-text'>Socials</p>
            </div>
            <Link
              className='social-links social-links-icons'
              to={contact.github[0]}
              target="_blank"
              onMouseEnter={() => ChangeIcon('.icon', 'icon-github-logo', 'icon-github-reverse')}
              onMouseLeave={() => ChangeIcon('.icon', 'icon-github-reverse', 'icon-github-logo')}
            >
              <i className="icon icon-github-logo"></i>
            </Link>
            <Link
              className='social-links social-links-icons'
              to={contact.linkedin[0]}
              target="_blank"
              onMouseEnter={() => ChangeIcon('.icon', 'icon-linkedin-logo', 'icon-linkedin-reverse')}
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