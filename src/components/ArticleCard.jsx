

export default ({title, votes, comment_count}) => {
    return (
    <li className='articleCard'>
        <p>{title}</p>
        <p>votes: {votes} comments: {comment_count}</p>
    </li>
    )
}

// paginate