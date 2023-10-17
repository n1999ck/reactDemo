const Nav = (props) => {
    const{incrementFunc, count} = props
    
    return(
        <nav className="nav">
        <a className="nav-link active" aria-current="page" href="/home">Active</a>
        <a className="nav-link" href="#">Link</a>
        <a className="nav-link" href="#">Link</a>
        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">
        </a>
      </nav>        
    )
} //usually same as file name

export default Nav;