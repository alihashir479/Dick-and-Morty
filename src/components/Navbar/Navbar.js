import { NavLink,Link } from "react-router-dom"
import style from './style.css'
const Navbar = () => {
    return(
<nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
  <div className="container">
    <Link className="navbar-brand" to="/">
    <h1 className="">Rick & Morty <span className="text-primary"> Wiki</span></h1>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink activeClassName="active" to="/" className="nav-link fs-4 fw-bold mx-2" aria-current="page" href="#">Home</NavLink>
        <NavLink to="/episodes" className="nav-link fs-4 fw-bold mx-2" >Episodes</NavLink>
        <NavLink to="/locations" className="nav-link fs-4 fw-bold mx-2" >Locations</NavLink>
        
      </div>
    </div>
  </div>
</nav>
    )
}
export default Navbar