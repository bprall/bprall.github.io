import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChangeIcon } from '../utils/mouseEvents';
import { useAuth } from './auth/auth';
import { getAuth, signOut } from 'firebase/auth';
import { Dropdown } from 'react-bootstrap';

function CapitalizeFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

interface ProjectMaterial {
  label: string;
  path: string;
}

interface Project {
  id: string;
  title: string;
  type: string;
  titleLink: string;
  titleLinkLabel: string;
  description: string;
  contents?: string;
  materials?: ProjectMaterial[];
}

function RenderNavbar() {
  const [cv, setCvLink] = useState('');
  const [projects, setProjects] = useState<Project[]>([]);
  const auth = useAuth();

  useEffect(() => {
    fetch('../../data.json')
      .then(response => response.json())
      .then(data => {
        setCvLink(data.cv);
        setProjects(data.projects || []);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleLogOut = () => {
    signOut(getAuth());
  };

  const handleCVClick = (event) => {
    event.preventDefault();
    if (cv) {
      window.open(cv, "_blank");
    }
  };

  return (
    <nav className="nonuser-navbar navbar sticky-top bg-body-tertiary">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <Link
            className="nonuser-navbar-brand navbar-brand"
            to="/"
            onMouseEnter={() => ChangeIcon('.icon', 'icon-bp-logo', 'icon-bp-bw')}
            onMouseLeave={() => ChangeIcon('.icon', 'icon-bp-bw', 'icon-bp-logo')}
          >
            <i className="icon icon-bp-logo"></i>
          </Link>
          <ul className="nav nav-pills">
            <li className="nonuser-nav-item nav-item">
              <Link
                className="nonuser-nav-link nav-link"
                to="/about"
              >
                {CapitalizeFirst('about')}
              </Link>
            </li>
            <li className="nonuser-nav-item nav-item">
              <Dropdown className="nonuser-nav-item nav-item">
                <Dropdown.Toggle variant="link" className="nonuser-nav-link nav-link">
                  {CapitalizeFirst('projects')}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item key='projects' as={Link} to="/projects">
                    {CapitalizeFirst('Projects Page')}
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  {projects.map((project) => (
                    <Dropdown.Item
                      key={project.id}
                      as={Link}
                      to={`/projects/${project.id}`}
                    >
                      {CapitalizeFirst(project.title)}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nonuser-nav-item nav-item">
              {cv ? (
                <a
                  href={cv}
                  className="nonuser-nav-link nav-link"
                  onClick={handleCVClick}
                >
                  {CapitalizeFirst('CV')}
                </a>
              ) : (
                <span className="nonuser-nav-link nav-link">{CapitalizeFirst('CV')}</span>
              )}
            </li>
            <li className="nonuser-nav-item nav-item">
              <Link
                className="nonuser-nav-link nav-link"
                to="/contact"
              >
                {CapitalizeFirst('contact')}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          {auth?.user ? (
            <Link className="nav-login" to="" onClick={handleLogOut}>
              <i className="bi bi-box-arrow-in-left login-arrow"></i>Log out
            </Link>
          ) : (
            <Link className="nav-login" to="/login">
              <i className="bi bi-box-arrow-in-left login-arrow"></i>Log in
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default RenderNavbar;
