import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChangeIcon } from '../utils/mouseEvents';
import { Dropdown, Offcanvas, Button } from 'react-bootstrap';
import { Project } from '../utils/interfaces';

function CapitalizeFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function RenderNavbar() {
  const [cv, setCvLink] = useState('');
  const [projects, setProjects] = useState<Project[]>([]);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

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

  const handleCVClick = (event) => {
    event.preventDefault();
    if (cv) {
      window.open(cv, "_blank");
    }
  };

  const handleOffCanvasLinkClick = () => {
    setShowOffcanvas(false);
  };

  return (
    <>
      {/* Standard Navbar */}
      <nav className="nonuser-navbar navbar sticky-top bg-body-tertiary d-none d-md-flex">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <Link
              className="nonuser-navbar-brand navbar-brand"
              to="/"
              onMouseEnter={() => ChangeIcon('.icon', 'icon-bp-bbl', 'icon-bp-blw')}
              onMouseLeave={() => ChangeIcon('.icon', 'icon-bp-blw', 'icon-bp-bbl')}
            >
              <i className="icon icon-bp-bbl"></i>
            </Link>
            <ul className="nav nav-pills">
              <li className="nonuser-nav-item nav-item">
                <Link className="nonuser-nav-link nav-link" to="/about">
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
                <Link className="nonuser-nav-link nav-link" to="/contact">
                  {CapitalizeFirst('contact')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Off-canvas Navbar */}
      <Button className="d-md-none offcanvas-navbutton" onClick={() => setShowOffcanvas(true)}>
        <i className="bi bi-list"></i>
      </Button>
      
      <Offcanvas show={showOffcanvas} onHide={() => setShowOffcanvas(false)} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="offcanvas-title">Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="nav flex-column">
            <li className="nonuser-nav-item nav-item">
              <Link className="nonuser-nav-link nav-link" to="/" onClick={handleOffCanvasLinkClick}>
                {CapitalizeFirst('home')}
              </Link>
            </li>
            <li className="nonuser-nav-item nav-item">
              <Link className="nonuser-nav-link nav-link" to="/about" onClick={handleOffCanvasLinkClick}>
                {CapitalizeFirst('about')}
              </Link>
            </li>
            <li className="nonuser-nav-item nav-item">
              <Dropdown className="nonuser-nav-item nav-item">
                <Dropdown.Toggle variant="link" className="nonuser-nav-link nav-link">
                  {CapitalizeFirst('projects')}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item key='projects' as={Link} to="/projects" onClick={handleOffCanvasLinkClick}>
                    {CapitalizeFirst('Projects Page')}
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  {projects.map((project) => (
                    <Dropdown.Item
                      key={project.id}
                      as={Link}
                      to={`/projects/${project.id}`}
                      onClick={handleOffCanvasLinkClick}
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
                <span className="nav-link">{CapitalizeFirst('CV')}</span>
              )}
            </li>
            <li className="nonuser-nav-item nav-item">
              <Link className="nonuser-nav-link nav-link" to="/contact" onClick={handleOffCanvasLinkClick}>
                {CapitalizeFirst('contact')}
              </Link>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default RenderNavbar;
