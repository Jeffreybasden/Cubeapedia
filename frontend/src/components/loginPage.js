import React from 'react'
import {RedirectFunction}  from 'react-router-dom'
import {useState} from 'react'
// import { useState, useEffect } from 'react'

const Login = (prop) =>{

const [user, setUser] = useState()
function userChanged(e){
 setUser(e.target.value)
}
const [pass, setPass] = useState()
function passChanged(e){
 setPass(e.target.value)
}

async function submitHandler(e){
e.preventDefault()
 fetch("http://localhost:4500/login",
 {
    method:"POST",
    body:JSON.stringify({username:user, password:pass})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             

 }).then(res=>{
    if(res.ok){
        prop.setLoggedIn(true)   
    }

 })
}

    return( prop.LoggedIn ? <redirect to="/" />:
        <main>
        <h1>Login Form</h1>
        <div className="form">
            <form onSubmit={(e)=>{submitHandler(e)}}>
                <label for="username">Username</label>
                <input type="text" id="username" name="username" onChange={(e)=>{userChanged(e)}} value={user}/>
                <label for="password">Password</label>
                <input type="password" id="password" name="password" onChange={(e)=>{passChanged(e)}} value={pass}/>
                <input type="submit" value="Login"/>
            </form>
            <p className="text-center">Forgot your password?<a href="/reset" className="link"> Reset Password</a></p>
            <p className="text-center">Don't have an account?<a href="/register" className="link">Register</a></p>
        </div> 
        </main>
    )
}

export default Login 