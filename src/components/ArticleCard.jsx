import { Link } from "react-router-dom"

export default ({article_id, title, topic, votes, comment_count, username, date}) => {
    return (
    <Link to={`/topic/${topic}/article/${article_id}`} className='articleCard'>
        <p>{title}</p>
        <p>{username}{date}</p>
        <p>votes: {votes} comments: {comment_count}</p>
    </Link>
    )
}