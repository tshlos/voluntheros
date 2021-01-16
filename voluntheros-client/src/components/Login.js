import React from 'react';
import { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom';

function Login({ setUsername, setLogged, logged, username }) {

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
        console.log(logged)
        // sessionStorage.setItem('username', username)
        // sessionStorage.setItem('loggedin', logged)
        history.push('/home')
    }

    // function selectTask() {
    //     const setTask = sessionStorage.setItem("value", value);
    //     const getTask = sessionStorage.getItem("value");
    //     console.log("session storage", getTask)
    // }


    return (

        <div className="login">
            <div className="login-form">
                <form onSubmit={handleSubmit}>
                    <h3 className="text">Please Log in</h3>
                    <input
                    onChange={handleChange}
                    type="text" 
                    value={form.username} 
                    name='username'
                    placeholder="Username"/>
                    <button>Login</button>
                </form>
                <Link to="/signup" className="signup-link">
                <small className="txt-small">New here? Click here to create an account!</small>
          </Link>
            </div>
        </div>
    )
}
export default Login;