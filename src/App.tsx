import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;


// function App() {
//   return (
//       <Router>
//           <Header />
//           <Routes>
//               <Route path="/" element={<Home />}>
//                   <Route index element={<Home />} />
//                   <Route path="about" element={<About />} />
//               </Route>
//           </Routes>
//       </Router>
//   );
// }