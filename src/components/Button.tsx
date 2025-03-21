import React from 'react';

const Button = ({setCurrentIndex, currentIndex, candidate}) => {
    return (
        <div>

            <button className="next"
                onClick={() => {
                    setCurrentIndex(currentIndex + 1)
                }}
            >Next Candidate
            </button>

            <button className="save"
                onClick={() => {
                    console.log("saving candidate")
                    localStorage.setItem('candidate', JSON.stringify(candidate))
                    // TODO:  save multiple! -> collection -> array
                }}
            >Save Candidate</button>


        </div>
    )
}

export default Button