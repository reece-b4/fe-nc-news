import { useEffect, useState } from "react"
import { getCommentsById } from "../api"
import {Comment} from './components.index'

export default ({article_id, setCommentsList, commentsList}) => {
    const [loading, setLoading] = useState(true)

useEffect(()=>{
    setLoading(true)
    getCommentsById(article_id).then((comments)=>{
        setCommentsList(comments)
        setLoading(false)
    })
}, [])
if (loading === true) {
    return <p>Loading...</p>
} else {
    return (
        <>
        <p>Comments</p>
        <ul>{
            commentsList.map(({author, body, created_at, votes, comment_id})=>{
                return (
                    <li key={comment_id} className='comment'>
                    <Comment author={author} body={body} created_at={created_at} votes={votes} comment_id={comment_id} setCommentsList={commentsList} setCommentsList={setCommentsList} />
                    </li>
                )
            })
        }</ul>
        </>
    )
}
}