import axios from "axios"

const api = axios.create({baseURL:'https://reece-ncnews.herokuapp.com/api'})

export function getArticles () {
   return api.get('/articles')
    .then(({data: {articles}})=>{
        return articles
    })
}