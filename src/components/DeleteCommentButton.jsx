import { UserContext } from "../contexts/User.Context"
import { useState, useContext } from 'react'
import { deleteCommentById } from "../api"

export default ({author, comment_id, commentDeleted,  setCommentDeleted}) => {
    const {user} = useContext(UserContext)

    function deleteComment () {
        deleteCommentById(comment_id).then(()=>{
            alert('comment deleted');
            setCommentDeleted((currCommentDeleted)=>{
                return !currCommentDeleted
            })
        })
    }

    if (user === author) {
        return (
            <>
        <button onClick ={deleteComment}>Delete</button>
        </>
        )
    }
    else return null
}