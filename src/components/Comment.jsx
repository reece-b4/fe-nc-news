import {ExpandingWrapper, DeleteCommentButton} from './components.index'
import { UserContext } from "../contexts/User.Context"
import { useContext } from 'react'


export default ({author, body, created_at, comment_id, commentsList, setCommentsList, votes, article_id}) => {
    const {user} = useContext(UserContext)
    const formattedDate = new Date(created_at).toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute:'2-digit'});

    return (
    <>
    <p className='commentBody'>{body}</p>

    {user === author ? <DeleteCommentButton author={author} comment_id={comment_id} commentsList={commentsList} setCommentsList={setCommentsList}/>:null }
    
    <ExpandingWrapper>
        <div id='expandingWrapperDiv'>
    {/* <Votes initialVotes={votes} article_id={article_id}/> */}
    {/* votes component is for article votes, backend doesn't support patch votes for comment votes? */}
    <p id='commentUsername' >{author}</p><p id='commentDate'>{formattedDate}</p>
    </div>
    </ExpandingWrapper>
</>
    )
}