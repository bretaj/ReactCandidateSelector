import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Nav from './components/Nav.tsx';

function App() {
  return (
    <>
    {/* TODO: figure out what exactly <Outlet /> does */}
      <Nav />
      <main>
        <Outlet />
        {/* TODO: uncomment when components are completed, and if needed
        <CandidateCard />
         */}
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