import React from 'react';
import { useState, useEffect } from 'react'

function Login() {

    const [username, setUsername] = useState('')
    return (
        <div login>
            <h2>login</h2>
            <div login-form>
                <form onSubmit={e => setUsername({username: e.target.value})}>
                    <input
                    onChange={e => setUsername({username: e.target.value})}
                     type="text" 
                    value={username} 
                    name={username}
                    placeholder="Username"/>
                    <button>Login</button>
                </form>
            </div>
        </div>
    )
}
export default Login