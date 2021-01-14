import React from 'react';
import { useState, useeffect } from 'react'

function Login() {

    const [username, setUsername] = useState('')
    return (
        <div login>
            <div login-form>
                <form onSubmit={e => setUsername()}>
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