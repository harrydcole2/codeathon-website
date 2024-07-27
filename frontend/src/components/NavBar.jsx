import {Link} from "react-router-dom"

const NavBar = () => {
  return (
    <nav>
        <ul>
            <li><Link to="/" >Featured Books</Link></li>
            <li><Link to="/pastPicks">Past Picks</Link></li>
            <li><Link to="/discussions">Discussions</Link></li>
            <li><Link to="/store">Store</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar
