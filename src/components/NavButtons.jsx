import {Link} from 'react-router-dom'

export default () => {
    return (
        <>
    <Link to='/' className='navButtons'>Home</Link>
    <Link to='/topic/coding' className='navButtons'>Coding</Link>
    <Link to='/topic/football' className='navButtons'>Football</Link>
    <Link to='/topic/cooking' className='navButtons'>Cooking</Link>
        </>
        )
}