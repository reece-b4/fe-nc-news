import { useEffect, useState } from "react"
import { getCommentsById } from "../api"
import {Comment} from './components.index'


export default ({article_id}) => {
const [commentsList, setCommentsList] = useState([])

useEffect(()=>{
    getCommentsById(article_id).then((comments)=>{
        setCommentsList(comments)
    })
}, [])

    return (
        <>
        <p>Comments</p>
        <ul>{
            commentsList.map(({author, body, created_at, votes, comment_id})=>{
                return (
                    <li key={comment_id} className='comment'>
                    <Comment author={author} body={body} created_at={created_at} votes={votes} />
                    </li>
                )
            })
        }</ul>
        </>
    )
}