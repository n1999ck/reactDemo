import React, {useEffect, useState} from "react"
import axios from "axios";

//Gets user search query, uses it in NASA image search endpoint
//https://images.nasa.gov/docs/images.nasa.gov_api_docs.pdf
function searchImage() {
    const[searchInput, setInput] = useState('');
    //URL with options - concatenate query
    const urlBase = 'https://images-api.nasa.gov/search?media_type=image&page=1&year_end=1969&q='

    const sendQuery = () => {
        
    }

    return(
        <React.Fragment>
            <input type="search" name="imageSearch" id="searchBar" onSubmit={sendQuery}/>
        </React.Fragment>
    )
}