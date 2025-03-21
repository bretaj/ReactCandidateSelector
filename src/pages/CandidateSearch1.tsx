import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {

    // const candidate: Candidate = {
    //     login: "john123",
    //     avatar_url: "https://placehold.co/500",
    //     location: "New York",
    //     email: "john123@mail.com"
    // }

    const [candidate, setCandidate] = useState<Candidate>(
        {
            useloginrname: "",
            avatar_url: "",
            location: "",
            email: ""
        }
    )

    const [candidates, setCandidates] = useState([])

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
        )
    }



    useEffect(() => {
        getRandomCandidates();
    }, [])


    useEffect(() => {
        getSingleCandidate()
    }, [candidates, currentIndex])


    return (
        <>

            <div className='card'>
                <img src={candidate.avatar_url} />
                <div>
                    <h2>{candidate.login}</h2>
                    <p>{candidate.location}</p>
                    <p>{candidate.email}</p>
                </div>
            </div>


            <div>

                <button
                    onClick={() => {
                        setCurrentIndex(currentIndex + 1)
                    }}
                >Next Candidate</button>

                <button
                    onClick={() => {
                        console.log("saving candidate")
                        localStorage.setItem('candidate', JSON.stringify(candidate))
                        // make sure to save multiple! -> collection -> array
                    }}
                >Save Candidate</button>


            </div>

        </>

    )

};



export default CandidateSearch;
