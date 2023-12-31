/* eslint-disable require-jsdoc */
/*eslint-disable */
// Used eslint to assist with styling - javascript hard enough already
import React, {useEffect, useState} from 'react';
import axios from 'axios';

// Gets user search query, uses it in NASA image search endpoint
// https://images.nasa.gov/docs/images.nasa.gov_api_docs.pdf
// it was a mistake to start with something this complex
// Probably should be separated out into different components
function Search() {
  const [searchInput, setSearchInput] = useState('');
  const [results, setResults] = useState([]);
  const [imageURL, setImageURL] = useState('');

  // search endpoint URL with options - concatenate query
  const urlBase =
    'https://images-api.nasa.gov/search?media_type=image&page=1&q=';

  // Image asset endpoint base url - concatenate nasa ID
  const imageURLBase = 'https://images-api.nasa.gov/asset/';

  // https://react.dev/learn/state-a-components-memory
  function handleSearchInputChange(e) {
    setSearchInput(e.target.value);
    console.log(searchInput)
  }

  function submitSearch() {
    const apiURL = urlBase + searchInput;
    axios
        .get(apiURL)
        .then((response) => {
          setResults(response.data.collection.items[0].data[0]);
          getImageUrl(results.nasa_id);
        })
        .catch(function(error) {
          console.log(error);
        });
  }

  // Sends nasa image ID to their image hosting API for image file urls
  function getImageUrl(nasaId) {
    const assetManifestUrl = imageURLBase + nasaId;
    axios
        .get(assetManifestUrl)
        .then((response) => {
          setImageURL(response.data.collection.items[0].href);         
        })
        .catch(function(error) {
          console.log(error);
        });
  }

  //finds the image url from the results
  useEffect(() => {
    if(results.length != 0){
      getImageUrl(results.nasa_id);
    }
  }, [results]);


  
  return (
    <React.Fragment>
      <div className="container-fluid mt-5">
        <div className='row'>
          <div className='col-md-4'>
            <input
              type="search"
              placeholder='Search'
              value={searchInput}
              onChange={handleSearchInputChange}
              className='my-3 searchBox'
            />
            <button 
              className='btn btn-outline-primary submitButton'
              onClick={submitSearch}>
                Submit
            </button>
            <h1 className='h1 py-3 titleHeader' data-testid='titleHeader'>{results.title}</h1>
            <p className='py-3 descriptionParagraph' data-testid='descriptonParagraph'>{results.description}</p>
          </div>
          <div className='col-md-8 p-4'>
            <img src={imageURL} alt="Image" className="img-fluid imageElement" data-testid='imageElement' />
          </div>
      </div>
      </div>
    </React.Fragment>
  );
}

export default Search;
