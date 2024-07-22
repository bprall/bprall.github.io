import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChangeIcon } from '../utils/mouseEvents';
import { useAuth } from './auth/auth';
import { getAuth, signOut } from 'firebase/auth';

// Function to capitalize the first letter
function CapitalizeFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function RenderNavbar() {
  const [cv, setCvLink] = useState('');
  const auth = useAuth();

  useEffect(() => {
    fetch('../../data.json')
      .then(response => response.json())
      .then(data => {
        setCvLink(data.cv);
      })
      .catch(error => {
        console.error('Error fetching CV link:', error);
      });
  }, []);

  const pills = [
    { title: 'about', link: "/about" },
    { title: 'projects', link: "/projects" },
    { title: 'CV', link: cv },
    { title: 'contact Me', link: "/contact" }
  ];

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
            {pills.map((pill, index) => (
              <li key={index} className="nonuser-nav-item nav-item">
                {pill.title === 'CV' ? (
                  <a
                    href={pill.link}
                    className="nonuser-nav-link nav-link"
                    onClick={handleCVClick}
                  >
                    {CapitalizeFirst(pill.title)}
                  </a>
                ) : (
                  <Link
                    className="nonuser-nav-link nav-link"
                    to={pill.link}
                  >
                    {CapitalizeFirst(pill.title)}
                  </Link>
                )}
              </li>
            ))}
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
