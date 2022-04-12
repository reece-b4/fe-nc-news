import { useState, useContext } from "react"
import { UserContext } from "../contexts/User.Context"
import { postCommentByArticleId } from "../api"


export default ({article_id, setCommentsList}) => {
    const [comment, setComment] = useState('')
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const {user} = useContext(UserContext)
    
function grabInput (e) {
    setComment(e.target.value)
}

function postComment (event) {
    event.preventDefault()
    if (comment !== '') {
    setButtonDisabled(true);
    postCommentByArticleId(user, article_id, comment)
    .then((APIcomment)=>{
        setButtonDisabled(false);
        setCommentsList((currCommentsList)=>{
            const spreadComments = [APIcomment, ...currCommentsList];
            setComment('');
            return spreadComments
        })
    })
} else {
    alert('comment cannot be empty');
}

}
    return (
        <>
        <form onSubmit={postComment}>
        <label>add a comment (max 500 characters)</label>
        <textarea value={comment} 
        maxLength='500' onChange={grabInput}></textarea> 
        <button disabled={buttonDisabled}>Submit</button>
        </form>
        </>
    )
}