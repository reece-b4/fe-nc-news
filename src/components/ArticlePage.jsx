import { useState, useEffect } from "react"
import { useParams} from "react-router-dom"
import { getArticleById } from "../api"
import {Votes, CommentsList, PostComment, Error} from './components.index'


export default () => {
    const [article, setArticle] = useState({})
    const [loading, setLoading] = useState(true)
    const [commentsList, setCommentsList] = useState([])
    const [error, setError]= useState(null)
    const {article_id} = useParams()

    useEffect(()=>{
        setLoading(true)
        getArticleById(article_id).then((article)=>{
            setArticle(article)
            setLoading(false)
        })
        .catch((err)=>{
            if (err) {
                setError('article not found')
            }
            setLoading(false)
        })
    }, [])
    if (loading === true) {
        return <p>Loading...</p>

    } else {
    const {title, topic, author, body, votes, created_at, comment_count} = article;

    return (
    <>
    { !!error ? <Error message={error}/> : (<><article>
    <p className='title'>{title}</p>
    <p className='author'>{author}</p>
    <p className='topic'>{topic}</p>
    <p className='body'>{body}</p>
    <Votes initialVotes={votes} article_id={article_id}/>
    <p>comments: {comment_count} {created_at}</p>
    </article>
    <PostComment article_id={article_id} setCommentsList={setCommentsList}/>
    <CommentsList article_id={article_id} commentsList={commentsList} setCommentsList={setCommentsList}/></>)}
    
    </>
    )
    }
}
