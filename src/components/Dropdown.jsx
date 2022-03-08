import { useState } from "react"
import ArticleCardList from "./ArticleCardList"
import DropdownButtons from "./DropdownButtons"
import Pagenav from "./Pagenav"

export default () => {
    const [pageNumber, setPageNumber] =useState(1);
    const [articlesCount, setArticlesCount] = useState([])

    return (
    <>
    <p>Dropdown</p>
    <DropdownButtons />
    <ArticleCardList pageNumber={pageNumber} setArticlesCount={setArticlesCount}/>
    <Pagenav setPageNumber={setPageNumber} articlesCount={articlesCount}/>
    </>
    )
}