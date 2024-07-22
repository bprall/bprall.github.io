import { Link } from 'react-router-dom';
import { ChangeIcon } from '../utils/mouseEvents';
import { useAuth } from './auth/auth';
import { getAuth, signOut } from 'firebase/auth';

function CapitalizeFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function RenderNavbar() {
  const auth = useAuth();

  const pills = [
    { title: 'about', link: "/about" },
    { title: 'projects', link: "/projects" },
    { title: 'portfolio', link: "/portfolio" },
    { title: 'contact', link: "/contact" }
  ];

  const handleLogOut = () => {
    signOut(getAuth());
  };

  return (
    <nav className="nonuser-navbar navbar sticky-top bg-body-tertiary">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <Link
            className="nonuser-navbar-brand navbar-brand"
            to="/"
            onMouseEnter={() => ChangeIcon('.bi-wallet', 'bi-wallet', 'bi-wallet2')}
            onMouseLeave={() => ChangeIcon('.bi-wallet2', 'bi-wallet2', 'bi-wallet')}
          >
            <i className="bi-wallet d-inline-block align-text-top"></i>
          </Link>
          <ul className="nav nav-pills">
            {pills.map((pill, index) => (
              <li key={index} className="nonuser-nav-item nav-item">
                <Link
                  className="user-nav-link nav-link"
                  to={pill.link}
                >
                  {CapitalizeFirst(pill.title)}
                </Link>
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