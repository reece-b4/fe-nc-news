import {ExpandingWrapper, DeleteCommentButton} from './components.index'
import { UserContext } from "../contexts/User.Context"
import { useContext } from 'react'


export default ({author, body, created_at, comment_id, commentsList, setCommentsList, votes, article_id}) => {
    const {user} = useContext(UserContext)

    return (
    <>
    <p>{body}</p>

    {user === author ? <DeleteCommentButton author={author} comment_id={comment_id} commentsList={commentsList} setCommentsList={setCommentsList}/>:null }
    
    <ExpandingWrapper>
        <div>
    {/* <Votes initialVotes={votes} article_id={article_id}/> */}
    {/* votes component is for article votes, backend doesn't support patch votes for comment votes? */}
    <p>{author}{created_at}</p>
    </div>
    </ExpandingWrapper>
</>
    )
}