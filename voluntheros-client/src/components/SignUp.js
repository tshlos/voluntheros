import React from 'react';
import { useHistory, Link } from "react-router-dom";
import { useState, useEffect } from 'react'

function SignUp({setUsername, signup, setSignup, username}) {

    const signUp = {username: ''}
    const [form, setForm] = useState(signUp)
    const history = useHistory()

    function handleChange(e){
        let obj = {[e.target.name]: e.target.value}
        setForm(prevState => ({...prevState, ...obj}))
    }

    function handleSubmit(e){
        e.preventDefault()
        setUsername(form.username)
        setSignup(true)
        console.log(username)
        console.log(signup)
        history.push('/')
    }
    return (
        <div className="signup">
            <div className="signup-form">
                <form onSubmit={handleSubmit}>
                <h1>Please Sign Up</h1>
                    <input 
                    onChange={handleChange} 
                    type="text"
                    value={form.username}
                    name='username'
                    placeholder="Username"/>
                    <button>Sign Up</button>
                </form>
                <Link to="/login"
                className="login-link">
                    Already have an account? Click here to Login!
                </Link>
            </div>
        </div>
    );
}

export default SignUp;