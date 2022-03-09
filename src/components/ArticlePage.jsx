import { useState, useEffect } from "react"
import { useParams} from "react-router-dom"
import { getArticleById } from "../api"
import {Votes, CommentsList} from './components.index'


export default () => {
    const [article, setArticle] = useState({})
    const [loading, setLoading] = useState(true)
    const {article_id} = useParams()

    useEffect(()=>{
        setLoading(true)
        getArticleById(article_id).then((article)=>{
            setArticle(article)
            setLoading(false)
        })
    }, [])

    if (loading === true) {
        return <p>Loading...</p>
    } else {
    const {title, topic, author, body, votes, created_at, comment_count} = article;
    return (
    <>
    <article>
    <p className='title'>{title}</p>
    <p className='author'>{author}</p>
    <p className='topic'>{topic}</p>
    <p className='body'>{body}</p>
    <Votes initialVotes={votes} article_id={article_id}/>
    <p>comments: {comment_count} {created_at}</p>
    </article>
    <CommentsList article_id={article_id}/>
    </>
    )
    }
}
