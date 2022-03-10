import {Votes} from './components.index'
import {ExpandingWrapper} from './components.index'

export default ({author, body, created_at, votes, article_id}) => {
    return (
    <>
    <p>{body}</p>
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