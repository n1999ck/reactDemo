/* eslint-disable require-jsdoc */
import React, {Component, useEffect, useState} from 'react';
import axios from 'axios';




function APOD() {

  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=O6WqJw9BMceGV0Ny79hoBa934YAYs1HWKs5ycCk7')
        .then((response) => {
          setData({APOD: response.data});
        })
        .catch(function(error) {
          console.log(error);
        });   
  })


  render() {
    const {APOD} = this.state;


    return (
      <React.Fragment>
        <div className="container-fluid my-5">
          <h1 className='pb-5'>{APOD.title}</h1>
          <img src={APOD.url} className="img-fluid h-100" alt={APOD.title} />
          <p className='py-3'>{APOD.explanation}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default Body;
