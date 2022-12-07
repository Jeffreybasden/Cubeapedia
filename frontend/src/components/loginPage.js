import React from 'react'
// import { useState, useEffect } from 'react'

const Login = (prop) =>{

//     const [LoggedIn, setLoggedIn] = useState()
//    useEffect(()=>{
//     let res = fetch("http://localhost:4500/checkin")
//     if(res.ok){

//     }
//    })

    return(
        <main>
        <h1>Login Form</h1>
        <div className="form">
            <form action="/login" method="POST">
                <label for="username">Username</label>
                <input type="text" id="username" name="username"/>
                <label for="password">Password</label>
                <input type="password" id="password" name="password"/>
                <input type="submit" value="Login"/>
            </form>
            <p className="text-center">Forgot your password?<a href="/reset" className="link"> Reset Password</a></p>
            <p className="text-center">Don't have an account?<a href="/register" className="link">Register</a></p>
        </div> 
        </main>
    )
}

export default Login 