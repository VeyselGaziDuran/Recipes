import { NavLink, Link } from "react-router-dom"
import SearchBar from "./SearchBar"
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
            <div className="container">
                <Link className="navbar-brand" to="/">Recipes</Link>
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/create">Create</NavLink>
                    </li>
                </ul>
                <SearchBar />
            </div>
        </nav>
    )
}
export default Navbar