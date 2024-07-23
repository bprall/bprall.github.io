import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormControl, Button, Dropdown } from 'react-bootstrap';
import { Project, About, FrontPage, Contact } from '../utils/interfaces';
import scrollToSection from '../utils/scrollToSection';

const RenderSearch: React.FC = () => {
  const [data, setData] = useState<Project[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchCategory, setSearchCategory] = useState<string>('Global');
  const [filteredResults, setFilteredResults] = useState<Project[]>([]);

  useEffect(() => {
    fetch('../../data.json')
      .then(response => response.json())
      .then(data => setData(data.projects || []))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const results = data.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredResults(results);
    } else {
      setFilteredResults([]);
    }
  }, [searchTerm, data]);

  return (
    <div className="search-bar">
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
            <Dropdown.Item eventKey="Project Pages">Project Pages</Dropdown.Item>
            <Dropdown.Item eventKey="Contact">Contact</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <FormControl
          type="search"
          placeholder="Search..."
          className="mr-sm-2"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <Button className="global-search-button" variant="outline-light">
          <img src='https://cdn.glitch.global/3874a658-483f-41ac-b439-3b48eab1370f/icon-search.png?v=1721703987075' width="20" height="20"/>
        </Button>
      </Form>
      {filteredResults.length > 0 && (
        <div className="search-results">
          {filteredResults.map(result => (
            <div key={result.id}>
              <Link to={`/projects/${result.id}`}>{result.title}</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RenderSearch;