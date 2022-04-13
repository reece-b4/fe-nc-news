import { useEffect, useState } from "react"
import { getCommentsById } from "../api"
import {Comment} from './components.index'

export default ({article_id, setCommentsList, commentsList}) => {
    const [loading, setLoading] = useState(true)
    const [displayPopup, setDisplayPopup] = useState(false)
    let popup = null;

useEffect(()=>{
    setLoading(true)
    getCommentsById(article_id).then((comments)=>{
        setCommentsList(comments)
        setLoading(false)
    })
}, [])

function fadePopup () {
    popup = document.getElementById('popupText');
    popup.classList.toggle('fade');
}

useEffect(()=>{
    setTimeout(()=>{
        document.getElementById('popupText') !== null ?
        fadePopup(): popup=null;
    }, 3000)
    setTimeout(()=>{
        setDisplayPopup(false)
    }, 4000)
}, [displayPopup === true])

if (loading === true) {
    return <p>Loading...</p>
} else {
    return (
        <>
        {displayPopup && <span id='popupText'>comment deleted</span>}
        <h4>Comments: {commentsList.length}</h4>
        <ul id='commentsList'>{
            commentsList.map(({author, body, created_at, votes, comment_id})=>{
                return (
                    <li key={comment_id} className='comment'>
                    <Comment author={author} body={body} created_at={created_at} votes={votes} comment_id={comment_id} setCommentsList={commentsList} setCommentsList={setCommentsList} setDisplayPopup={setDisplayPopup}/>
                    </li>
                )
            })
        }</ul>
        </>
    )
}
}