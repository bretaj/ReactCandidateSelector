const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <nav>
    <p>Home</p>
    <p>Potential Candidates</p>
    </nav>
  )
};

export default Nav;

// TODO: can I use the routing instead?

// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';

// const Navigation: React.FC = () => {
//   const location = useLocation();
  
//   return (
//     <nav className="text-right">
//       <ul>
//         <li>
//           <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
//         </li>
//         <li>
//           <Link to="/SavedCandidates" className={location.pathname === '/SavedCandidates' ? 'active' : ''}>Potential Candidates</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Nav