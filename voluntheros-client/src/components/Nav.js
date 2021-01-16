import { NavLink } from "react-router-dom";

export default function Nav({ logged }) {

  
    return (
        <div className="navbar">
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
                        <NavLink to='/' className='tabs'>Login</NavLink>
                        <NavLink to='/signUp' className='tabs'>SignUp</NavLink>
                    </>
                )}
            </div>
        </div>
    )
}