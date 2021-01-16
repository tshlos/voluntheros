import { NavLink } from "react-router-dom";
import NavBar from 'react-bootstrap/Navbar'

export default function Nav({logged}) {
    return (
        <NavBar fixed='top' >
            <h1>Voluntheroes</h1>
            {logged ? (
                <>
                <NavLink to="/logout" className="tabs">Logout</NavLink>
                </>
            ) : (
                <>
                <NavLink to='/' className='tabs'>Login</NavLink>
                <NavLink to='/signUp' className='tabs'>SignUp</NavLink>
                </>
            )}
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