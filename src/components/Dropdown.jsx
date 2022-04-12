// import Pagenav from "./Pagenav"
import { useSearchParams, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default () => {
    const [searchParams, setSearchParams] = useSearchParams({});
    const [sortBy, setSortBy] = useState('created_at')
    const [order, setOrder] =useState('DESC')
    const {topic} = useParams()
    const [isSwitchOn, setIsSwitchOn] = useState(true)

useEffect(()=>{
    setSearchParams({sortBy: `${sortBy}`,
    order:`${order}`})
},[sortBy, order, topic])

function setSortByState (e) {
    setSortBy(e.target.value)
}

function setOrderState (e) {
    setIsSwitchOn(!isSwitchOn);
    if (isSwitchOn === true) {
        setOrder('ASC')
    } else {
    setOrder('DESC')
    }
}

    return (
    <>
    <div className='dropdown'>
    <label htmlFor="sortBy">sort by </label>
    <select name="sortBy" onChange={setSortByState}>
        <option value="created_at">date</option>
        <option value="author">user</option>
        <option value="title">title</option>
        <option value="votes">votes</option>
        <option value="comment_count">comment count</option>
    </select>

<label htmlFor='orderSwitch' className='switchLabel'>desc</label>
    <label className="switch">
  <input id='orderSwitch' type="checkbox" name='orderBy' onChange={setOrderState}/>
  <span className="slider round"></span>
</label>
<label htmlFor='orderSwitch' className='switchLabel'>asc</label>

    {/* <input onChange={setOrderState} type="radio" name='orderBy' value='ASC'/>
    <label htmlFor='ASC'>asc</label>

    <input onChange={setOrderState} type="radio" name='orderBy' value='DESC' defaultChecked/>
    <label htmlFor='DESC'>desc</label> */}
    </div>
    </>
    )
}