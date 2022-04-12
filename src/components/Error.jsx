import { Link } from "react-router-dom"

export default ({message}) => {
    return (
        <>
    <p>error: {message}</p>
    <Link to='/'>
        <button>take me home</button>
        </Link>
    </>
    )
}