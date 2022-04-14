import { useEffect, useState } from "react"
import { patchVotesById } from "../api"

export default ({initialVotes, article_id}) => {
    const [votesErr, setVotesErr] = useState(null)
    const [offlineErr, setOfflineErr] = useState(null)
    const [votes, setVotes] = useState(initialVotes)
    const [voteChange, setVoteChange] = useState(0)

    useEffect(()=>{
        if (document.getElementById('votesError')) {
            setTimeout(()=>{
                let popup = document.getElementById('votesError');
                popup.classList.toggle('fade');
        }, 3000)
        setTimeout(()=>{
            setVotesErr(null)
        }, 4000)
    }  
    }, [votesErr])

        const handleButtonClick = (votecrement) => {
            setOfflineErr(null)
            setVotesErr(null)
            if (voteChange !== votecrement) {
                setVotes((currVotes)=>{
                    return currVotes + votecrement})
                    setVoteChange((currVoteChange)=>{
                        return currVoteChange + votecrement})
                    patchVotesById(article_id, votecrement).catch((offlineErr)=>{
                        setVotes((currVotes)=>{
                        return currVotes - voteChange
                        })
                        setOfflineErr('Something went wrong, please try again.')
                            }) 
            } else {
                setVotesErr('users can only vote once per article')
            }
        }
    
    return (
        <>
        <p className='votes'>votes &nbsp;<button id='minus' className='votesButtons' value={'-'} onClick={() => {handleButtonClick(-1)}}>-</button>&nbsp; {votes} &nbsp;<button id='plus' className='votesButtons' value={'+'} onClick={() => {handleButtonClick(1)}}>+</button></p>
        {votesErr && <p id='votesError' >{votesErr}</p>}
        {offlineErr && <p id='offlineError'>{offlineErr}</p>}
        </>
    )
}


