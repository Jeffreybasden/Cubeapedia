import React from "react";
import {NavLink}from "react-router-dom"
import { useState , useEffect} from "react";
import style from "../nav.module.css"
const Navigation = (prop) => {

  
 
    return(
        <header>
      <ul>
      <li><img className="logo" src={'/images/logo.png'}/></li>
      <li><a href="/">Browse</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/create">Add a Cube</a></li>
      <li><a href="/create/accessory">Add Accessory</a></li>
      <li><a href="/logout">Logout</a></li>
      <li><a href="/login">Login</a></li>
      <li><a href="/register">Register</a></li>
        
      </ul>
    </header>
    )
}

export default Navigation