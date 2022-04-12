import {Link} from 'react-router-dom'

export default () => {
    return (
        <>
    <Link to='/' className='navButtons'><p className='navButtonText'>Home</p></Link>
    <Link to='/topic/coding' className='navButtons'><p className='navButtonText'>Coding</p></Link>
    <Link to='/topic/football' className='navButtons'><p className='navButtonText'>Football</p></Link>
    <Link to='/topic/cooking' className='navButtons'><p className='navButtonText'>Cooking</p></Link>
        </>
        )
}