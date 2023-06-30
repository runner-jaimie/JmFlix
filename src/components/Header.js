// // Header
// import { Link } from 'react-router-dom';
// import Nav from './Nav';
// import NavSort from './NavSort';

// function Header() {
//   return (
//     <header>
//       {/* <h1><Link to={'/'}></Link></h1> */}
//       <Nav />
//       <NavSort />
//     </header>
//   );
// }

// export default Header;


// Header

import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';
import NavSort from './NavSort';
import logo from '../images/movie-logo.png';


const Header = () => {

    const [navOpen, setNavOpen] = useState(false);

    const showHideNav = () => {
        setNavOpen(!navOpen);
    }
   
    const isDesktop = (e) => {
        if(e.matches){
            setNavOpen(false);
        }
    }
    
    useEffect(() => {
          let mediaQuery = window.matchMedia('(min-width: 600px)');
          mediaQuery.addListener(isDesktop);
          // this is the cleanup function to remove the listener
          return () => mediaQuery.removeListener(isDesktop);
    }, []);

    return (
        <header className={navOpen ? 'show' : undefined}>
          <div className="nav-left">
            <div className="nav-logo">
              <NavLink to={'/'}><img src={logo} alt="movie logo" /></NavLink>
            </div>
            <div className="nav-title">
              <h2>JMFlix</h2>
            </div>
          </div>  
          <button className="btn-main-nav" 
                  onMouseDown={(e) => { e.preventDefault(); }}
                  onClick={showHideNav}>
              <span className="hamburger-icon">
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
              </span>
              <span className="sr-only">Menu</span>
          </button>
          <Nav />
          <NavSort/>
            
        </header>
    );
}

export default Header;