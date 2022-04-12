import { Link } from "react-router-dom"

export default ({article_id, title, topic, votes, comment_count, username, date}) => {
    const formattedDate = new Date(date).toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute:'2-digit'});

    return (
    <Link to={`/topic/${topic}/article/${article_id}`} className='articleCard'>
        <p className='title'>{title}</p>
        <hr/>
        <p className='articleUsername'>{username}</p>
        <p className='articleDate'>{formattedDate}</p>
        <p id='articleVotes'>votes: {votes}</p>
        <p id='articleCommentCount'>comments: {comment_count}</p>
    </Link>
    )
}