import React, { useState } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth';

const credentials = {
    username: '',
    password: ''
}

function Login() { 
    const [ login, setLogin ] = useState(credentials);

    const handleChange = (e) => {
        setLogin({
           ...login,
           [e.target.name]: e.target.value
        }) 
        //console.log(login)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth().post('/login', login)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            console.log("Login Successful!")
            // console.log(res)
            // setLogin(res.data)
        })
    }

    const handleLogout = () => {
        axiosWithAuth().post('/logout', login)
        .then(res => {
            localStorage.removeItem('token');
            console.log("Logout Successful!")
            
        })
    }
   
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                value={login.username}
                onChange={handleChange}            
            />
            <input
                type="password"
                name="password"
                value={login.password}
                onChange={handleChange}   
            />
            <button>Login</button>

            </form>
            {localStorage.getItem('token') && <button onClick={handleLogout}>Logout</button>}
            
        </div>
    )
}

export default Login
