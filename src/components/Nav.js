const Nav = (props) => {
    const{incrementFunc, count} = props
    
    //Not sure why my links are social distancing
    return(
      <nav class="navbar navbar-dark bg-black">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">APOD Home</a>
          <a class="nav-link" href="/imageSearch">Nasa Image Search</a>
        </div>
      </nav>
    
    )
}

export default Nav;