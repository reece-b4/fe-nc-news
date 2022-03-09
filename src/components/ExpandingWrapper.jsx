import { useState } from "react"

export default ({children}) => {
const [isExpanded, setIsExpanded] =useState(false)
const toggleExpand = () => setIsExpanded((currIsExpanded)=> !currIsExpanded)

    return (
        <section>
            <button onClick={toggleExpand}>{isExpanded ? 'see less' : 'see more'}</button>
            {isExpanded && children}
        </section>
    )

}