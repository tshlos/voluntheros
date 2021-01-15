import React from 'react';
import { useState, useEffect } from 'react'

function SignUp({setUsername}) {

    const signUp = {username: ''}
    const [form, setForm] = useState(signUp)

    function handleChange(e){
        let obj = {[e.target.name]: e.target.value}
        setForm(prevState => ({...prevState, ...obj}))
    }

    function handleSubmit(e){
        e.preventDefault()
        setUsername(form.username)
    }
    return (
        <div className="signup">
            <div className="signup-form">
                <form onSubmit={handleSubmit}>
                    <input 
                    onChange={handleChange} 
                    type="text"
                    value={form.username}
                    name='username'
                    placeholder="Username"/>
                    <button>Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;