/* eslint-disable require-jsdoc */
import './App.css';
import Nav from './components/Nav';
import {Outlet} from 'react-router';
import React from 'react';

function App() {
  return (
    <div className="App bg-dark text-light min-vh-100">
      <Nav />
      <div className='container pb-5 my-0'>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
