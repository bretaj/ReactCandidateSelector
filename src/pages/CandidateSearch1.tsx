import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {


    const [candidate, setCandidate] = useState<Candidate>(
        {
            login: "",
            avatar_url: "",
            location: "",
            email: ""
        }
    );

    const [candidates, setCandidates] = useState([])
    const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);



    async function getRandomCandidates() {
        const dataFromGithub = await searchGithub()
        setCandidates(dataFromGithub)
    }

    async function getSingleCandidate() {
        const candidateData = await searchGithubUser(candidates[currentIndex].login)
        setCandidate(
            {
                login: candidateData.login,
                avatar_url: candidateData.avatar_url,
                location: candidateData.location,
                email: candidateData.email
            }
        );
    }



    useEffect(() => {
        getRandomCandidates();
    }, [])


    useEffect(() => {
        getSingleCandidate()
    }, [candidates, currentIndex])

    useEffect(() => {
        const saved = localStorage.getItem('savedCandidates');
        if (saved) {
            setSavedCandidates(JSON.parse(saved));
        }
    }, []);

    const saveCandidate = () => {
        const updatedSavedCandidates = [...savedCandidates, candidate];
        setSavedCandidates(updatedSavedCandidates);
        localStorage.setItem('savedCandidates', JSON.stringify(updatedSavedCandidates));
    }

    return (
        <>

            <div className='card'>
                <img src={candidate.avatar_url || 'default-image-url.png'} alt={candidate.login} />
                <div>
                    <h2>{candidate.login}</h2>
                    <p>{candidate.location}</p>
                    <p>{candidate.email}</p>
                </div>
            </div>


            <div>

                <button className="next"
                    onClick={() => {
                        setCurrentIndex(currentIndex + 1)
                    }}
                >Next Candidate</button>

                <button className="save"
                    onClick={() => {
                        console.log("saving candidate")
                        localStorage.setItem('candidate', JSON.stringify(candidate))
                        // TODO:  save multiple! -> collection -> array
                    }}
                >Save Candidate</button>


            </div>

        </>

    )

};



export default CandidateSearch;
