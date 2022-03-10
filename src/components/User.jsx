import { UserContext } from "../contexts/User.Context"
import { useContext } from "react"

export default () => {
    const {user} = useContext(UserContext)
    
    return <h1>Logged in as: {user} </h1>
}