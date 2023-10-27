/* eslint-disable require-jsdoc */
import React, {useEffect, useState} from 'react';
import axios from 'axios';


function APOD() {
  // Object with the data and the set method
  const [data, setData] = useState({});

  // function runs once - on page load
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=O6WqJw9BMceGV0Ny79hoBa934YAYs1HWKs5ycCk7')
        .then((response) => {
          setData(response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
  }, []); // empty dependency = runs once, like component mount

  return (
    <React.Fragment>
      <div className="container-fluid my-5">
        <h1 className='pb-5'>{data.title}</h1>
        <img src={data.url} className="img-fluid h-100"
          alt={data.title} data-testid="image"/>
        <p className='py-3'>{data.explanation}</p>
      </div>
    </React.Fragment>
  );
}


export default APOD;
