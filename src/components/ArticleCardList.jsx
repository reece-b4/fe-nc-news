import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import {ArticleCard, Error} from "./components.index"
import  { getArticles, api, getArticlesByTopic } from "../api"
import Dropdown from "./Dropdown";

export default () => {
    const [articlesList, setArticlesList] = useState([])
    const [loading, setLoading] =useState(true)
    const [error, setError]= useState(null)
    const {topic} = useParams()
    const search = useLocation().search;
    const sortBy = new URLSearchParams(search).get('sortBy');
    const order = new URLSearchParams(search).get('order');

    
    useEffect(()=> {
        setError(null)
        setLoading(true)
        getArticles(topic, sortBy, order).then((articles)=>{
            setArticlesList(articles)
            setLoading(false)
        }).catch((err)=>{
            if (err) {
                setError('topic not found')
            }
            setLoading(false)
        })
    }, [topic, sortBy, order])

if (loading) {
    return <p>Loading...</p>
} else {
    return (
        <>
        { !!error ? <Error message={error}/> :
            <ul className='articleList'>
            {articlesList.map(({article_id, title, topic, votes, comment_count, author, created_at})=>{
             
                return <ArticleCard key={article_id} article_id={article_id} title={title} topic={topic} votes={votes} comment_count={comment_count} username={author} date={created_at}/>
            })}
            </ul> 
}
            </>
    
      
    )
        }
    }
