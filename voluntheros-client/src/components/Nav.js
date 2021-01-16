import { NavLink } from "react-router-dom";
import NavBar from 'react-bootstrap/Navbar'

export default function Nav({logged}) {

    function logout() {
        sessionStorage.clear();
        window.location.href = "/login";
    }

    return (
        <NavBar fixed='top' >
            <h1>Voluntheroes</h1>
            {logged ? <a href="#" onClick={logout} > Logout </a> : <NavLink to="/login"> Login </NavLink> }
            {!logged && <NavLink to="/signup"> Sign Up </NavLink>}
        </NavBar>
    )
}

{/* <div id='nav'>
<NavLink to='/' exact>Voluntheroes</NavLink>
<NavLink to='/login' className='tabs'>Login</NavLink>
<NavLink to='/signUp' className='tabs'>SignUp</NavLink>
<NavLink to='/home' className='tabs'>Home</NavLink>
<NavLink to="/logout" className="tabs">Logout</NavLink>
</div> */}