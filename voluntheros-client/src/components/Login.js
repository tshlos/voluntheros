import React from 'react';
import { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom';

function Login({ setUsername, setLogged, username }) {

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
            console.log(username)
            history.push('/home')
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
export default Login;