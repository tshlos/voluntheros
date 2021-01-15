import React from 'react';
import { useState, useEffect } from 'react'

function Login({ setUsername}) {

    const logIn = { username: ''}
    const [form, setForm] = useState(logIn)

    function handleChange(e) {
        let obj = {[e.target.name]: e.target.value}
        setForm(prevState => ({...prevState, ...obj}))
    }

    function handleSubmit(e) {
        e.preventDefault();
        setUsername(form.username)
    }

    return (

        <div className="login">

            <div className="login-form">
                <form onSubmit={handleSubmit}>
                    <input
                    onChange={handleChange}
                    type="text" 
                    value={form.username} 
                    name='username'
                    placeholder="Username"/>
                    <button>Login</button>
                </form>
            </div>
        </div>
    )
}
export default Login