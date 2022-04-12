import { UserContext } from "../contexts/User.Context"
import { useState, useContext } from 'react'
import { deleteCommentById } from "../api"

export default ({comment_id, setCommentsList}) => {
    const [comment, setcomment] = useState({})
    const {user} = useContext(UserContext)

    function deleteComment () {
        deleteCommentById(comment_id).then(()=>{
            alert('comment deleted');
            setCommentsList((currCommentsList)=>{
                const newList =  currCommentsList.filter((comment)=> comment.comment_id !== comment_id) 
                return newList
            })
        })
    }
    
        return (
            <>
        <button id='deleteButton' onClick ={deleteComment}>Delete</button>
        </>
        )
}