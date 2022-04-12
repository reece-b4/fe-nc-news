import { UserContext } from "../contexts/User.Context"
import { useContext } from "react"

export default () => {
    const {user} = useContext(UserContext)
    
    return <p id='user'>logged in as<br/> {user} </p>
}