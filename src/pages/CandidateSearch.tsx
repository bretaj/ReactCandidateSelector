import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';

const CandidateSearch = () => {
  return (
    <>
      <h1>Candidate Search</h1>
      {/* <searchGithub />
      <searchGithubUser /> */}
    </>
  );
};

export default CandidateSearch;



// TEMPLATE FROM THE INTERNET. MAY NOT WORK
// const CandidateSearch = () => {
//   const [username, setUsername] = useState('');
//   const [userData, setUserData] = useState(null);
//   const [error, setError] = useState('');

//   const handleSearchUser = async () => {
//     setError(''); // Reset any previous errors

//     const data = await searchGithubUser(username); // Call the searchGithubUser function
//     if (data && data.login) {
//       setUserData(data);
//     } else {
//       setError('User not found or invalid username');
//     }
//   };

//   const handleSearchGithub = async () => {
//     // Assuming searchGithub has a similar structure to searchGithubUser
//     const githubData = await searchGithub(username);
//     // Handle the response from searchGithub as needed
//     console.log(githubData);
//   };

//   return (
//     <>
//       <h1>Candidate Search</h1>
//       <input
//         type="text"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         placeholder="Enter GitHub username"
//       />
//       <button onClick={handleSearchUser}>Search User</button>
//       <button onClick={handleSearchGithub}>Search GitHub</button>

//       {error && <p>{error}</p>}
//       {userData && (
//         <div>
//           <h2>{userData.name}</h2>
//           <p>Username: {userData.login}</p>
//           <p>Location: {userData.location}</p>
//           <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} />
//         </div>
//       )}
//     </>
//   );
// };

// export default CandidateSearch;