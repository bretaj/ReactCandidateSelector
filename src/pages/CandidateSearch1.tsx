import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';
// import SavedCandidates from './SavedCandidates';

const CandidateSearch = () => {

    // initializes a state variable (candidate) to hold the details of a single candidate. The initial state is an objext w/empty strings for each property (login, location, etc.)
    // setCandidate is the function used to update this state 
    const initialData = {
        login: "",
        avatar_url: "",
        location: "",
        email: "",
        company: "",
        bio: ""
    }
    const [candidate, setCandidate] = useState<Candidate>(initialData);

    const [candidates, setCandidates] = useState([initialData])
    const [currentIndex, setCurrentIndex] = useState(0);
    // candidates is an array that will hold multiple candidate objects fetched from GitHub
    // currentIndex tracks the index of the currently displayed candidate

    // this asynchronous function calls searchGitHub() and updates the candidates state with the retrieved data
    async function getRandomCandidates() {
        const dataFromGithub = await searchGithub()
        setCandidates(dataFromGithub)
    }
    //this function fetches detailed info about a specific candidate based on their GitHub login. It uses currentIndex to get correct candidate from candidates array
    // after fetching, it updates the candidate state with the detailed info 
    async function getSingleCandidate() {
        const candidateData = await searchGithubUser(candidates[currentIndex].login)
        setCandidate(
            {
                login: candidateData.login,
                avatar_url: candidateData.avatar_url,
                location: candidateData.location,
                email: candidateData.email,
                company: candidateData.company,
                bio: candidateData.bio
            }
        );
    }


    // this useEffect runs once when the component mounts (due to empty dependency array []). It calls getRandomCandidates() to fetch candidates
    useEffect(() => {
        getRandomCandidates();
    }, [])

    // this useEffect runs whenever cadidates or currentIndex changes. It calls getSingleCandidate() to update the displayed candidate based on current index
    useEffect(() => {
        getSingleCandidate()
    }, [candidates, currentIndex])


    return (
        <>
            {/* this part renders a card displaying the candidate's avatar, location, etc. */}
            <div className='card'>
                <img src={candidate.avatar_url} alt={candidate.login} />
                <div>
                    <h2>{candidate.login}</h2>
                    <p>{candidate.location || "location unknown"}</p>
                    <p>{candidate.email || "email unavailable"}</p>
                    <p>{candidate.company || "company unavailable"}</p>
                    <p>{candidate.bio || "bio unavailable"}</p>
                </div>
            </div>


            <div>
                {/* The Next Candidate button increments the currentIndex, allowing user to view next candidate */}
                <button className="next"
                    onClick={() => {
                        setCurrentIndex(currentIndex + 1)
                    }}
                >Next
                </button>
                {/* the Save Candidate button saves the current candidate's info to localStorage */}
                <button className="save"
                    onClick=
                    {() => {
                        // saving mutliple candidates to local storage
                        const savedCandidates = JSON.parse(localStorage.getItem("candidate")as string) || [];
                        savedCandidates.push(candidate);

                        localStorage.setItem('candidate', JSON.stringify(savedCandidates))

                    }}
                >Save
                </button>


            </div>

        </>

    )

};

export default CandidateSearch;



