// import { useState } from "react";
import PagenavButtons from "./PagenavButtons"

export default ({articleCount, setPageNumber}) => {
const pageSize = 10;


    return (
        <>
        <p>Pagenav</p>
        <PagenavButtons />
    </>
    )
}

// articlesCount state in dropdown so that pagenav has total number of articles
// done

// in articlecardlist map over slice of array depending on pagenumber
// 

//buttons, onclick setpagenumber
//

//a button need to be disabled on first and last pages
//

//final page may not have full pagesize worth of items
//