import axios from "axios"

const api = axios.create({baseURL:'https://reece-ncnews.herokuapp.com/api'})

export function getArticles (topic, sortBy, order) {
    return api.get('articles', {params: {topic, sortBy, order}})
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

export function getCommentsById (id) {
    return api.get(`articles/${id}/comments`)
    .then(({data: {comments}})=>{
        return comments
    })
}

export function postCommentByArticleId (username, id, comment) {
    return api.post(`articles/${id}/comments`, {username: username, body: comment})
    .then(({data:{comment}})=>{
return comment;
    })
}

export function deleteCommentById (commentId) {
    return api.delete(`comments/${commentId}`)
}