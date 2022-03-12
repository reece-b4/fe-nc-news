import DropdownButtons from "./DropdownButtons"
import Pagenav from "./Pagenav"
import { useSearchParams, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default () => {
    const [searchParams, setSearchParams] = useSearchParams({});
    const [sortBy, setSortBy] = useState('created_at')
    const [order, setOrder] =useState('DESC')
    const {topic} = useParams()

useEffect(()=>{
    setSearchParams({sortBy: `${sortBy}`,
    order:`${order}`})
},[sortBy, order, topic])

function setSortByState (e) {
    setSortBy(e.target.value)
}

function setOrderState (e) {
    setOrder(e.target.value)
    }

    return (
    <>
    <div className='dropdown'>
    <label htmlFor="sortBy">Sort article by: </label>
    <select name="sortBy" onChange={setSortByState}>
        <option value="created_at">date</option>
        <option value="author">user</option>
        <option value="title">title</option>
        <option value="votes">votes</option>
        <option value="comment_count">comment count</option>
    </select>
    <input onChange={setOrderState} type="radio" name='orderBy' value='ASC'/>
    <label htmlFor='ASC'>asc</label>

    <input onChange={setOrderState} type="radio" name='orderBy' value='DESC' defaultChecked/>
    <label htmlFor='DESC'>desc</label>
    </div>
    <DropdownButtons />
    <Pagenav/>
    </>
    )
}