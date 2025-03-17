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
//               <Route path="/" element={<Layout />}>
//                   <Route index element={<CandidateSearch />} />
//                   <Route path="Potential Candidates" element={<SavedCandidates />} />
//               </Route>
//           </Routes>
//       </Router>
//   );
// }