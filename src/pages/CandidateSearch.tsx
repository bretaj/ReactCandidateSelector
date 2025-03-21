import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [allCandidates, setAllCandidates] = useState<Candidate[] | null>(null);
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUsers(){
      const data= await searchGithub();
      setAllCandidates(data)
      setCandidate(data[0])
      setLoading(false)
    }
    fetchUsers()
  }, []);
};

export default CandidateSearch;

interface Candidate {
  login: string;
  name: string;
  location: string;
  avatar_url: string;
  email: string | null;
  html_url: string;
  company: string | null;
}

// const handleNextCandidate = () => {
//   if (allCandidates && currentIndex < allCandidates.length - 1) {
//     setCurrentIndex(currentIndex + 1);
//   }
// };

// const handlePreviousCandidate = () => {
//   if (currentIndex > 0) {
//     setCurrentIndex(currentIndex - 1);
//   }
// };

// const handleSaveCandidate = () => {
//   // Logic to save the candidate (e.g., to local storage or state)
//   console.log(`Saved candidate: ${allCandidates[currentIndex].login}`);
// };

// if (loading) return <div>Loading...</div>;
// if (error) return <div>{error}</div>;
// if (!allCandidates) return <div>No candidates available</div>;

// const candidate = allCandidates[currentIndex];

// return (
//   <div>
//     <h2>Candidate Search</h2>
//     <div>
//       <img src={candidate.avatar_url} alt={`${candidate.name}'s avatar`} />
//       <h3>{candidate.name}</h3>
//       <p>Username: {candidate.login}</p>
//       <p>Location: {candidate.location}</p>
//       <p>Email: {candidate.email || 'N/A'}</p>
//       <p>Company: {candidate.company || 'N/A'}</p>
//       <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
//     </div>
//     <button onClick={handlePreviousCandidate}>-</button>
//     <button onClick={handleSaveCandidate}>+</button>
//     <button onClick={handleNextCandidate}>Next Candidate</button>
//   </div>
// );
// };

// export default CandidateSearch;

