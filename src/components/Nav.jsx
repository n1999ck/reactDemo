import React from 'react';
const Nav = (props) => {
  // Not sure why my links are social distancing
  return (
    <nav className="navbar navbar-dark bg-black">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">APOD Home</a>
        <a className="nav-link" href="/imageSearch">Nasa Image Search</a>
      </div>
    </nav>

  );
};

export default Nav;
