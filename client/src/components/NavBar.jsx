import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/userprofile'>User Profile</Link>
        </nav>
    </>
  )
}

export default NavBar