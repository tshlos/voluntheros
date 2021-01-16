import { NavLink } from "react-router-dom";
import NavBar from 'react-bootstrap/Navbar'
import "./Nav.css";


export default function Nav({logged}) {
    return (
        <NavBar fixed='top'className="navbar">
            <div className="logo-container">
                <h1 className="logo" >Voluntheroes</h1>
            </div>
            <div className="nav-links">
                {logged ? (
                    <>
                    <NavLink to='/home' className='tabs'>Home</NavLink>
                    <NavLink to="/logout" className="tabs">Logout</NavLink>
                    </>
                ) : (
                    <>
                    <NavLink to='/login' className='tabs'>Login</NavLink>
                    <NavLink to='/signUp' className='tabs'>SignUp</NavLink>
                    </>
                )}
            </div>
        </NavBar>
    )
}