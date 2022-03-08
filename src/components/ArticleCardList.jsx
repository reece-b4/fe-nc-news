import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard"
import  { getArticles, api } from "../api"


export default ({setArticlesCount, pageNumber}) => {
    const [articlesList, setArticlesList] = useState([])
    const [articlesSlice, setArticlesSlice] = useState([])
    const [loading, setLoading] =useState(true)

    useEffect(()=> {
        getArticles().then((articles)=>{
            setArticlesList(articles)
            setArticlesCount(articles.length)
            // setArticlesSlice(articlesList.slice((pageNumber - 1), (pageNumber + 8)))
            setLoading(false)
            // add pagination later, put setArticlesSlice in another useEffect of if statement outside ofn this one?
        })
    }, [])
    if (loading === true) {
        return <p>Loading...</p>
    } else {
    return (
        <>
        <ul className='articleList'>
        {articlesList.map(({article_id, title, votes, comment_count})=>{
         
            return <ArticleCard key={article_id} article_id={article_id} title={title} votes={votes} comment_count={comment_count}/>
        })}
        </ul>
</>
    )
    }
}