import React from "react";
import {useState} from "react"
import { useNavigate } from "react-router-dom";

const Register = () =>{
    const navigate = useNavigate()
    const[name,setName] = useState()
    function nameHandler(e){
        setName(e.target.value)
        
    }
    const[email,setEmail] = useState()
    function emailHandler(e){
        setEmail(e.target.value)
        
    }
    const[pass,setPass] = useState()
    function passHandler(e){
        setPass(e.target.value)
        
    }
    const[pass2,setPass2] = useState()
    function pass2Handler(e){
        setPass2(e.target.value)
        
    }

 function onSubmitHandler(e){

e.preventDefault()

fetch("http://localhost:4500/register", {
    method:'POST',
    body:JSON.stringify({
        username:name,
        email:email,
        password:pass,
        repeatPassword:pass2
        
    }),
    headers:{
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
}).then(res=>{
    console.log(res.json())
    if(res.ok){
      return  navigate("/")
    }
    return navigate("/register")
})
}

    return(
        <>
        <h1>Register Form</h1>
        <div className="form">
            <form onSubmit={(e)=>{onSubmitHandler(e)}}>
                <label for="username">Username</label>
                <input type="text" id="username" name="username" onChange={(e)=>{nameHandler(e)}} value={name}/>
                <label for="email">Email</label>
                <input type="email" name="email" id="username" onChange={(e)=>{emailHandler(e)}} value={email}/>
                <label for="password">Password</label>
                <input type="password" id="password" name="password" onChange={(e)=>{passHandler(e)}} value={pass}/>
        
                <label for="repeatPassword">Re-Password</label>
                <input type="password" id="repeatPassword" name="repeatPassword" onChange={(e)=>{pass2Handler(e)}} value={pass2}/>
                <input type="submit" value="Register"/>
            </form>
            <p>Have an account?<a class="link" href="/login"> Login</a></p>
        </div>
        </>
          
    )
}
export default Register