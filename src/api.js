import axios from "axios"



const api = axios.create({baseURL:'https://reece-ncnews.herokuapp.com/api'})



export function getArticles () {
    return api.get('articles')
    .then(({data: {articles}})=>{
        return articles
    })
}


export function getArticlesByTopic (topic) {
    return api.get(`articles?topic=${topic}`)
    .then(({data: {articles}})=>{
        return articles
    })
}

export function getArticleById (id) {
    return api.get(`articles/${id}`)
    .then(({data: {article}})=>{
        return article
    })
}

export function patchVotesById (id, votecrement) {
    return api.patch(`articles/${id}`, {inc_votes:votecrement})
}
