import React, {useEffect, useState} from "react"
import axios from "axios";
import GetNasaImage from './GetNasaImage';

//Gets user search query, uses it in NASA image search endpoint
//https://images.nasa.gov/docs/images.nasa.gov_api_docs.pdf
function Search() {
    const[searchInput, setSearchInput] = useState('');
    const[results, setResults] = useState([]);
    const[imageURL, setImageURL] = useState('');

    //URL with options - concatenate query
    const urlBase = 'https://images-api.nasa.gov/search?media_type=image&page=1&q='

    //https://react.dev/learn/state-a-components-memory
    function handleSearchInputChange(e){
        setSearchInput(e.target.value);
    }

    function submitSearch(e) {
        let apiURL = urlBase + searchInput;
        console.log(apiURL)
        axios.get(apiURL)
            .then((response) => {
                console.log("Got to response")
                var index = 0
                //console.log(response.data)
                setResults(response.data.collection)
                
                if(results.metadata.total_hits > 100){
                    index = (Math.floor(Math.random() * 100))
                }else{
                    index = (Math.floor(Math.random()* results.metadata.total_hits))
                }
                //console.log(index)
                console.log(results.items[index])
                //nasa id to get images from media asset manifest
                console.log(results.items[index].data[0].nasa_id)
                //console.log(results.items[index].data)
                //console.log(results.items[index].links)
            })
            .catch(function(error){
                console.log(error);
            })
        
        }
    
    
    useEffect(() => {
        console.log("we're in the effect")
    }, [results] )

    return(
        <React.Fragment>

                <input type="search" name="imageSearch" id="searchBar" value={searchInput} onChange={handleSearchInputChange}/>
                <button type="submit" class="btn btn-primary" onClick={submitSearch}>Search</button>
                
                
        </React.Fragment>
    )
}

export default Search