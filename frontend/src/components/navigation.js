import React from "react";
import style from "../nav.module.css"
const Navigation = (prop) => {

   

    return(
      <header>
      <ul>
      <li><img className="logo" src={'http://localhost:4500/images/logo.png'}/></li>
      <li><a href="/" >Browse</a></li>
      <li><a href="/about" >About</a></li>
      {prop.LoggedIn&&<li><a href="/create" >Add a Cube</a></li>}
      {prop.LoggedIn&&<li><a href="/create/accessory" >Add Accessory</a></li>}
      {prop.LoggedIn && <li><a href="/logout" >Logout</a></li>}
      {!prop.LoggedIn&&<li><a href="/login" >Login</a></li>}
      {!prop.LoggedIn&&<li><a href="/register" >Register</a></li>}
      </ul>
    </header>
    )
  // }
}

export default Navigation