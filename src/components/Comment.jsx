import {ExpandingWrapper, DeleteCommentButton} from './components.index'


export default ({author, body, created_at, comment_id, commentDeleted, setCommentDeleted, votes, article_id}) => {
    return (
    <>
    <p>{body}</p>
    <DeleteCommentButton author={author} comment_id={comment_id} commentDeleted setCommentDeleted={setCommentDeleted}/>
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