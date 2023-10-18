/* eslint-disable require-jsdoc */
// Used eslint to assist with styling - javascript hard enough already
import React, {useEffect, useState} from 'react';
import axios from 'axios';

// Gets user search query, uses it in NASA image search endpoint
// https://images.nasa.gov/docs/images.nasa.gov_api_docs.pdf

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
    submitSearch();
  }

  function submitSearch() {
    const apiURL = urlBase + searchInput;
    axios
        .get(apiURL)
        .then((response) => {
          setResults(response.data.collection.items[0].data[0]);
          console.log(results);
        })
        .catch(function(error) {
          console.log(error);
        });
  }

  function getImageUrl(nasaId) {
    const assetManifestUrl = imageURLBase + nasaId;
    axios
        .get(assetManifestUrl)
        .then((response) => {
          console.log('Getting image url');
          setImageURL(response.data.collection.items[0].href);
          console.log(imageURL);
        })
        .catch(function(error) {
          console.log(error);
        });
  }

  useEffect(() => {
    console.log('we\'re in the effect');
    if (results.items) {
      console.log(results.items);
      getImageUrl(results.items[0].data[0].nasa_id);
    }
  }, [results]);

  return (
    <React.Fragment>
      <div className="container-fluid mt-5">
        <input
          type="search"
          name="imageSearch"
          id="searchBar"
          placeholder='Search'
          value={searchInput}
          onChange={handleSearchInputChange}
        />
        <button type="submit" className="btn btn-primary"
          onClick={submitSearch}>
          Search
        </button>
        <br />
        <h1>{results.title}</h1>
        <img src={imageURL} alt="Image" className="img-fluid h-50" />
        <p>{results.description}</p>
      </div>
    </React.Fragment>
  );
}

export default Search;
