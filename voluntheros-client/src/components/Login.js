import React from 'react';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';

function Login({ setUsername, setLogged}) {

    const logIn = { username: ''}
    const [form, setForm] = useState(logIn)

    const history = useHistory()

    function handleChange(e) {
        let obj = {[e.target.name]: e.target.value}
        setForm(prevState => ({...prevState, ...obj}))
    }

    function handleSubmit(e) {
        e.preventDefault();
        setUsername(form.username)
        setLogged(true)
        // return history.push('/home') add back in later
    }

    return (

        <div className="login">

            <div className="login-form">
                <form onSubmit={handleSubmit}>
                    <h1>Please Log in</h1>
                    <input
                    onChange={handleChange}
                    type="text" 
                    value={form.username} 
                    name='username'
                    placeholder="Username"/>
                    <button>Login</button>
                </form>
                <Link to="/signup" className="signup-link">
            New here? Click here to create an account!
          </Link>
            </div>
        </div>
    )
}
export default Login