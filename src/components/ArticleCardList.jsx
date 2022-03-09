import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleCard from "./ArticleCard"
import  { getArticles, getArticlesByTopic } from "../api"

export default () => {
    const [articlesList, setArticlesList] = useState([])
    const [loading, setLoading] =useState(true)
    const {paramsTopic} = useParams()
    
    useEffect(()=> {
        setLoading(true)
        if (paramsTopic !== undefined) {
        getArticlesByTopic(paramsTopic).then((articles)=>{
            setArticlesList(articles)
            setLoading(false)
        })
    } else {
        getArticles().then((articles)=>{
            setArticlesList(articles)
            setLoading(false)
        })
    }
    }, [paramsTopic])

    if (loading === true) {
        return <p>Loading...</p>
    } else {
    return (
        <>
        <ul className='articleList'>
        {articlesList.map(({article_id, title, topic, votes, comment_count})=>{
         
            return <ArticleCard key={article_id} article_id={article_id} title={title} topic={topic} votes={votes} comment_count={comment_count}/>
        })}
        </ul>
</>
    )
    }
}