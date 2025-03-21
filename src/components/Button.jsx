
const Button = () => {
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
        // TODO:  save multiple! -> collection -> array
    }}
>Save Candidate</button>


</div>

}

export default Button