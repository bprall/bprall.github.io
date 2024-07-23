import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../utils/interfaces';

const ProjectsPage: React.FC = () => {

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
            <h4 className="projects-title" dangerouslySetInnerHTML={{ __html: project.title || '' }}/>
            <div className="projects-desc" dangerouslySetInnerHTML={{ __html: project.description || '' }} />
            <Link to={`/projects/${project.id}`} className="read-more">
              <button className="read-more-button">Read More</button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
