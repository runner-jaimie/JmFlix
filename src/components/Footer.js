// Footer
import { useLocation } from 'react-router-dom';
import logo from '../images/movie-logo.png';
import { NavLink } from 'react-router-dom';

function Footer() {


  return (
    <footer>
      <div className="footer-logo">
          <NavLink to={'/'}>
            <img src={logo} alt="footer logo" />
          </NavLink>
      </div>
      <div className="footer-text">
        <a
          href='http://jmlee.bcitwebdeveloper.ca/'
          alt='Jaimie Lee portfolio site'
          target='_blank'
          rel='noopener noreferrer'
        >
          &copy; 2021 Jaimie Lee
        </a>
        {' | '}
        Reference{' '}
        <a
          href='https://www.themoviedb.org/'
          alt='The Movie DB API'
          target='_blank'
          rel='noopener noreferrer'
        >
          The MOVIE DB
        </a>
      </div>
    </footer>
  );
}

export default Footer;



