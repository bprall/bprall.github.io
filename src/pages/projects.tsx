import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../utils/interfaces';

const RenderProjects: React.FC = () => {

  const [projects, setProjects] = useState<Project[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    fetch('../../data.json')
      .then(response => response.json())
      .then(data => {
        setProjects(data.projects || []);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    document.title = 'Projects | Blake Prall';
  }, []);

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="projects">
      <div className="staggered-grid-container">
        <div className="projects-search staggered-grid-item">
          <h2 id="projects-page-title">Projects</h2>
          <div className="projects-searchbar">
            <input
              type="search"
              name="projects"
              placeholder="Search Projects..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        {filteredProjects.map((project) => (
          <div key={project.id} className="projects-individual staggered-item">
            <div className="home-card" key={project.id}>
              <div className="home-card-content">
                <h2 className="home-card-title">{project.title}</h2>
                <p className="home-card-description">{project.frontPageDesc || project.description}</p>
                <div className="home-card-buttons">
                  <Link to={`/projects/${project.id}`} className="home-card-button">Page</Link>
                  {project.titleLink && (
                    <a href={project.titleLink} className="home-card-button" target="_blank" rel="noopener noreferrer">
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RenderProjects;