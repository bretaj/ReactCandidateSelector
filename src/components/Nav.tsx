// const Nav = () => {
//   // TODO: Add necessary code to display the navigation bar and link between the pages
//   return (
//     <nav>
//     <p>Home</p>
//     <p>Potential Candidates</p>
//     </nav>
//   )
// };

// export default Nav;

// TODO: can I use this routing instead?

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav: React.FC = () => {
  const location = useLocation();
  
  return (
    <nav className="nav">
      <ul>
        <li className="nav-item">
              {/* css to get active links to show as heavier font */}
              {/* TODO: figure out why links are stacked*/}
          <Link to="/" className={location.pathname === '/' ? 'active' : 'nav-link'}>Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/SavedCandidates" className={location.pathname === '/SavedCandidates' ? 'active' : 'nav-link'}>Potential Candidates</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav