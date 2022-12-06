import React, {useState, useEffect} from "react"
import Search from "./search"
import Link from "react"
const Cube = (prop) =>{

    if(prop.cube){


    return(
        <div key={prop.cube.id}>
        <h1>Browser</h1>
        <Search/>
          <div className="cube">
           <img className="cube" src={prop.cube.url}/>
           <p className="name">{prop.cube.name}</p>
           <p><span>Difficulty level:</span> {prop.cube.diff}</p>
           <Link className="btn" to={`/details/${prop.cube.id}`}>Details</Link>
         </div>
         </div>
         )
    }else{
        return(
            <div>
            <h1 style="text-align:center;"> no cubes, you can add one</h1>
            </div>
            )
    }
}

const Home = () => {
const [cubes, setCubes] = useState()
useEffect = (() =>{
    let res = fetch("/")
    let Cubes = res.json()
    setCubes(Cubes)
})
    const cubeLay = cubes.map(cube=> <Cube cube={cube}/>)
    return(
    <div>{cubeLay}</div>
    )
}

export default Home