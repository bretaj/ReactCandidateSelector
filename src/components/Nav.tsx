

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
        <li>
              {/* css to get active links to show as darker color */}
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        </li>
        <li>
          <Link to="/SavedCandidates" className={location.pathname === '/SavedCandidates' ? 'active' : ''}>Potential Candidates</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav