import {Votes} from './components.index'
import {ExpandingWrapper} from './components.index'

export default ({author, body, created_at, votes, article_id}) => {
    return (
    <>
    <p>{body}</p>
    <ExpandingWrapper>
        <div>
    <Votes initialVotes={votes} article_id={article_id}/>
    <p>{author}{created_at}</p>
    </div>
    </ExpandingWrapper>
</>
    )
}