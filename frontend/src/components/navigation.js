import React from "react";
import { useState , useEffect} from "react";
import style from "../nav.module.css"
const Navigation = (prop) => {

  // const [LoggedIn, setLoggedIn] = useState(false)

  // useEffect(()=>{
  //   let res = fetch("http://localhost:4500/check")
  //   if(res.ok){
  //     setLoggedIn(true)
  //   }else setLoggedIn(false)
    
  // },[])
 
  // if(LoggedIn){

  //   return(
  //     <header>
  //     <ul>
  //     <li><img alt="logo" className="logo" src={'http://localhost:4500/images/logo.png'}/></li>
  //     <li><a href="/" >Browse</a></li>
  //     <li><a href="/about" >About</a></li>
  //     <li><a href="/create" >Add a Cube</a></li>
  //     <li><a href="/create/accessory" >Add Accessory</a></li>
  //     <li><a href="/logout" >Logout</a></li>
  //     </ul>
  //   </header>
  //   )
  // }else{
    return(
      <header>
      <ul>
      <li><img className="logo" src='/css/images/logo.png'/></li>
      <li><a href="/" >Browse</a></li>
      <li><a href="/about" >About</a></li>
      <li><a href="/create" >Add a Cube</a></li>
      <li><a href="/create/accessory" >Add Accessory</a></li>
      <li><a href="/logout" >Logout</a></li>
      <li><a href="/login" >Login</a></li>
      <li><a href="/register" >Register</a></li> 
      </ul>
    </header>
    )
  // }
}

export default Navigation