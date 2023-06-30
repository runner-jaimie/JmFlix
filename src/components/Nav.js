// Nav
import { NavLink } from 'react-router-dom';


function Nav() {

  function blur(e){
      e.target.blur();
  }

  return ( 
    <nav className="nav-container">
        <ul className="nav-right">
            <li>
                <NavLink className="nav-right-link" to={'/'}>Home</NavLink>
            </li>
            <li>
                <NavLink className="nav-right-link" to={'/about'}>About</NavLink>
            </li>
            <li>
                <NavLink className="nav-right-link" to={'/favourites'}>Favourites</NavLink>
            </li>
        </ul>
    </nav>
  );
}

export default Nav;
