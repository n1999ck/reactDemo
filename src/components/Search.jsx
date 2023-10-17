import React, {useEffect, useState} from "react"
import axios from "axios";

//Gets user search query, uses it in NASA image search endpoint
//https://images.nasa.gov/docs/images.nasa.gov_api_docs.pdf
function Search() {
    const[searchInput, setSearchInput] = useState('');

    //URL with options - concatenate query
    const urlBase = 'https://images-api.nasa.gov/search?media_type=image&page=1&year_end=1969&q='

    //https://react.dev/learn/state-a-components-memory
    function handleSearchInputChange(e){

        console.log(e)
        setSearchInput(e.target.value);
    }

    function submitSearch(e) {
        
        let apiURL = urlBase + searchInput;
        window.open(apiURL)
    }

    return(
        <React.Fragment>
            <input type="search" name="imageSearch" id="searchBar" value={searchInput} onChange={handleSearchInputChange}/>

            <button type="button" class="btn btn-primary" onClick={submitSearch}>Search</button>
        </React.Fragment>
    )
}

export default Search