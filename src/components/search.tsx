import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormControl, Button, Dropdown } from 'react-bootstrap';
import { Project, About, Contact, FrontPageSection, NewsItem } from '../utils/interfaces';

const RenderSearch: React.FC = () => {
  const [home, setHome] = useState<FrontPageSection[]>([]);
  const [about, setAbout] = useState<About | null>(null);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [contact, setContact] = useState<Contact | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchCategory, setSearchCategory] = useState<string>('Global');
  const [filteredProjectResults, setFilteredProjectResults] = useState<Project[]>([]);
  const [filteredHomeResults, setFilteredHomeResults] = useState<FrontPageSection[]>([]);
  const [filteredAboutResults, setFilteredAboutResults] = useState<(About | NewsItem)[]>([]);
  const [filteredContactResults, setFilteredContactResults] = useState<Partial<Contact> | null>(null);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../../data.json');
        const data = await response.json();
        setHome(data.frontPage || []);
        setAbout(data.about || null);
        setNews(data.news || []);
        setProjects(data.projects || []);
        setContact(data.contact || null);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
      setShowResults(false);
    }
  };

  const handleScroll = () => {
    setShowResults(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (searchTerm && (searchCategory === 'Projects' || searchCategory === 'Global')) {
      const results = projects.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProjectResults(results);
    } else {
      setFilteredProjectResults([]);
    }
  }, [searchTerm, projects, searchCategory]);

  useEffect(() => {
    if (searchTerm && (searchCategory === 'Home' || searchCategory === 'Global')) {
      const results = home.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredHomeResults(results);
    } else {
      setFilteredHomeResults([]);
    }
  }, [searchTerm, home, searchCategory]);

  useEffect(() => {
    if (searchTerm && (searchCategory === 'About' || searchCategory === 'Global')) {
      const aboutResults = about ? [
        about
      ].filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.education.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.majors.some(major => major.toLowerCase().includes(searchTerm.toLowerCase())) ||
        item.selfSummary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.moreDetails.some(detail => detail.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                         detail.content.toLowerCase().includes(searchTerm.toLowerCase()))
      ) : [];
      
      const newsResults = news.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

      const combinedResults = [...aboutResults, ...newsResults];
      setFilteredAboutResults(combinedResults);
    } else {
      setFilteredAboutResults([]);
    }
  }, [searchTerm, about, news, searchCategory]);

  useEffect(() => {
    if (searchTerm && (searchCategory === 'Contact' || searchCategory === 'Global')) {
      const contactResults: Partial<Contact> = {};
      if (contact) {
        if (contact.address.some(addr => addr.toLowerCase().includes(searchTerm.toLowerCase()))) {
          contactResults.address = contact.address.filter(addr => addr.toLowerCase().includes(searchTerm.toLowerCase()));
        }
        if (contact.phone.some(ph => ph.toLowerCase().includes(searchTerm.toLowerCase()))) {
          contactResults.phone = contact.phone.filter(ph => ph.toLowerCase().includes(searchTerm.toLowerCase()));
        }
        if (contact.email.some(em => em.toLowerCase().includes(searchTerm.toLowerCase()))) {
          contactResults.email = contact.email.filter(em => em.toLowerCase().includes(searchTerm.toLowerCase()));
        }
        if (contact.github.some(link => link.toLowerCase().includes(searchTerm.toLowerCase()))) {
          contactResults.github = contact.github.filter(link => link.toLowerCase().includes(searchTerm.toLowerCase()));
        }
        if (contact.url.some(link => link.toLowerCase().includes(searchTerm.toLowerCase()))) {
          contactResults.url = contact.url.filter(link => link.toLowerCase().includes(searchTerm.toLowerCase()));
        }
        if (contact.linkedin.some(link => link.toLowerCase().includes(searchTerm.toLowerCase()))) {
          contactResults.linkedin = contact.linkedin.filter(link => link.toLowerCase().includes(searchTerm.toLowerCase()));
        }
        setFilteredContactResults(Object.keys(contactResults).length > 0 ? contactResults : null);
      } else {
        setFilteredContactResults(null);
      }
    } else {
      setFilteredContactResults(null);
    }
  }, [searchTerm, contact, searchCategory]);

  const allResults = searchCategory === 'Global' ? [
    ...filteredProjectResults,
    ...filteredHomeResults,
    ...filteredAboutResults,
    ...(filteredContactResults ? [filteredContactResults] : [])
  ] : [];

  return (
    <div ref={searchRef} className="search-bar-container">
      <Form className="form-inline">
        <Dropdown onSelect={(eventKey) => setSearchCategory(eventKey || 'Global')}>
          <Dropdown.Toggle className="search-dropdown" variant="outline-light" id="dropdown-basic">
            {searchCategory}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="Global">Global</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="Home">Home</Dropdown.Item>
            <Dropdown.Item eventKey="About">About</Dropdown.Item>
            <Dropdown.Item eventKey="Projects">Projects</Dropdown.Item>
            <Dropdown.Item eventKey="Contact">Contact</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <FormControl
          type="search"
          placeholder="Search..."
          className="mr-sm-2"
          value={searchTerm}
          onChange={e => {
            setSearchTerm(e.target.value);
            setShowResults(true);
          }}
        />
        <Button className="global-search-button" variant="outline-light">
          <img src='https://cdn.glitch.global/3874a658-483f-41ac-b439-3b48eab1370f/icon-search.png?v=1721703987075' width="20" height="20"/>
        </Button>
      </Form>
      {showResults && (filteredProjectResults.length > 0 && (searchCategory === 'Projects')) && (
        <div className="search-results">
          {filteredProjectResults.map(result => (
            <Link className="result-row" to={`/projects/${result.id}`} key={result.id}>
              <div className="indiv-result">{result.title}</div>
            </Link>
          ))}
        </div>
      )}
      {showResults && (filteredHomeResults.length > 0 && (searchCategory === 'Home')) && (
        <div className="search-results">
          {filteredHomeResults.map(result => (
            <Link className="result-row" to="/" key={result.title}>
              <div className="indiv-result">{result.title}</div>
            </Link>
          ))}
        </div>
      )}
      {showResults && (filteredAboutResults.length > 0 && (searchCategory === 'About')) && (
        <div className="search-results">
          {filteredAboutResults.map(result => (
            'title' in result ? (
              <Link className="result-row" to="/about" key={result.title}>
                <div className="indiv-result">{result.title.length > 25 ? `${result.title.substring(0, 25)}...` : result.title}</div>
              </Link>
            ) : (
              <Link className="result-row" to="/about" key={result.name || result.moreDetails.map(detail => detail.title).join('-')}>
                <div className="indiv-result">{result.name || 'About Section'}</div>
              </Link>
            )
          ))}
        </div>
      )}
      {showResults && (filteredContactResults && (searchCategory === 'Contact')) && (
        <div className="search-results">
          {filteredContactResults.address && (
            <Link className="result-row" to="/contact">
              <div className="indiv-result">Address: {contact.address[0]}</div>
            </Link>
          )}
          {filteredContactResults.phone && (
            <a className="result-row" href={`tel:${contact.phone[0]}`}>
              <div className="indiv-result">Phone: {contact.phone[0]}</div>
            </a>
          )}
          {filteredContactResults.email && (
            <a className="result-row" href={`mailto:${contact.email[0]}`}>
              <div className="indiv-result">Email: {contact.email[0]}</div>
            </a>
          )}
          {filteredContactResults.github && filteredContactResults.github.length > 0 && (
            <a className="result-row" href={contact.github[0]}>
              <div className="indiv-result">GitHub: {contact.github[1]}</div>
            </a>
          )}
          {filteredContactResults.url && filteredContactResults.url.length > 0 && (
            <a className="result-row" href={contact.url[0]}>
              <div className="indiv-result">URL: {contact.url[1]}</div>
            </a>
          )}
          {filteredContactResults.linkedin && filteredContactResults.linkedin.length > 0 && (
            <a className="result-row" href={contact.linkedin[0]}>
              <div className="indiv-result">LinkedIn: {contact.linkedin[1]}</div>
            </a>
          )}
        </div>
      )}
      {showResults && (allResults.length > 0 && searchCategory === 'Global') && (
        <div className="search-results">
          {allResults.map((result, index) => {
            if ('id' in result) {
              return (
                <Link className="result-row" to={`/projects/${result.id}`} key={index}>
                  <div className="indiv-result">
                    {result.title.length > 25 ? `${result.title.substring(0, 25)}...` : result.title}
                  </div>
                </Link>
              );
            }
            // Check if the result is of type FrontPageSection
            if ( 'content' in result) {
              return (
                <Link className="result-row" to="/" key={index}>
                  <div className="indiv-result">
                    {result.title.length > 25 ? `${result.title.substring(0, 25)}...` : result.title}
                  </div>
                </Link>
              );
            }
            // Check if the result is of type About
            if ( 'name' in result) {
              return (
                <Link className="result-row" to="/about" key={index}>
                  <div className="indiv-result">
                    {result.name.length > 25 ? `${result.name.substring(0, 25)}...` : result.name}
                  </div>
                </Link>
              );
            }
            // Check if the result is of type NewsItem
            if ('date' in result) {
              return (
                <Link className="result-row" key={index} to="/about">
                  <div className="indiv-result">
                    {result.title.length > 25 ? `${result.title.substring(0, 25)}...` : result.title}
                  </div>
                </Link>
              );
            }
            if ('address' in result) {
              return (
                <div key={index}>
                  <Link className="result-row" to='/contact'>
                    <div className="indiv-result">Address: {contact.address[0]}</div>
                  </Link>
                </div>
              );
            }
            if ('phone' in result) {
              return (
                <div key={index}>
                  <a className="result-row" href={`tel:${contact.phone[0]}`}>
                    <div className="indiv-result">Phone: {contact.phone[0]}</div>
                  </a>
                </div>
              );
            }
            if ('email' in result) {
              return (
                <div key={index}>
                  <a className="result-row" href={`mailto:${contact.email[0]}`}>
                    <div className="indiv-result">Email: {contact.email[0]}</div>
                  </a>
                </div>
              );
            }
            if ('github' in result) {
              return (
                <div key={index}>
                  <Link className="result-row" to={contact.github[0]}>
                    <div className="indiv-result">GitHub: {contact.github[1]}</div>
                  </Link>
                </div>
              );
            }
            if ('url' in result) {
              return (
                <div key={index}>
                  <Link className="result-row" to={contact.url[0]}>
                    <div className="indiv-result">URL: {contact.url[1]}</div>
                  </Link>
                </div>
              );
            }
            if ('linkedin' in result) {
              return (
                <div key={index}>
                  <Link className="result-row" to={contact.linkedin[0]}>
                    <div className="indiv-result">LinkedIn: {contact.linkedin[1]}</div>
                  </Link>
                </div>
              );
            }
            return null;
          })}
        </div>
      )}
    </div>
  );
};

export default RenderSearch;