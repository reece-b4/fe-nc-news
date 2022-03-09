import { useEffect, useState } from "react"
import { patchVotesById } from "../api"

export default ({initialVotes, article_id}) => {
    const [err, setErr] = useState(null)
    const [votes, setVotes] = useState(initialVotes)

    const handleButtonClick = (votecrement) => {
        setErr(null)
        setVotes((currVotes)=>{
            return currVotes + votecrement
            })
        patchVotesById(article_id, votecrement).catch((err)=>{
            setVotes((currVotes)=>{
                return currVotes - votecrement
                })
                setErr('Something went wrong, please try again.')
                })
    }
//disable after if hasvoted state is true
    
    return (
        <>
    <p>votes: {votes} <button value={'-'} onClick={() => {handleButtonClick(-1)}}>-</button> <button value={'+'} onClick={() => {handleButtonClick(1)}}>+</button></p>
    { err ? <p>{err}</p> : null}
    </>
    )
}

