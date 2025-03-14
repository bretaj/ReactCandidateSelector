const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <>
    <div className="nav">
    <div>Home</div>
    <div>Potential Candidates</div>
    </div>
    </>
  )
};

export default Nav;


// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';

// const Navigation: React.FC = () => {
//   const location = useLocation();
  
//   return (
//     <nav className="text-right">
//       <ul>
//         <li>
//           <Link to="/" className={location.pathname === '/' ? 'active' : ''}>About Me</Link>
//         </li>
//         <li>
//           <Link to="/portfolio" className={location.pathname === '/portfolio' ? 'active' : ''}>Portfolio</Link>
//         </li>
//         <li>
//           <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
//         </li>
//         <li>
//           <Link to="/resume" className={location.pathname === '/resume' ? 'active' : ''}>Resume</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Nav