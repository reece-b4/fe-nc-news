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

    const formattedDate = new Date(created_at).toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute:'2-digit'});

    return (
    <>
    { !!error ? <Error message={error}/> : (<>
    <article>
    <p className='title'>{title}</p>
    <hr/>
    <p className='articleUsername'>{author}</p>
    <p className='articleDate'>{formattedDate}</p>
    <p className='body'>{body}</p>
    <hr/>
    <p id='topic'>{topic}</p>
    <Votes className='votes' initialVotes={votes} article_id={article_id}/>
    </article>
    <PostComment article_id={article_id} setCommentsList={setCommentsList}/>
    <CommentsList article_id={article_id} commentsList={commentsList} setCommentsList={setCommentsList}/></>)}
    
    </>
    )
    }
}
