import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <>
        <nav style={{
            display: 'flex',
            justifyContent: 'space-around',
            backgroundColor: 'lightgrey',
            padding: '10px',
            margin: '10px',
        }}>
            <Link to='/'>Home</Link>
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/userprofile'>User Profile</Link>
        </nav>
    </>
  )
}

export default NavBar