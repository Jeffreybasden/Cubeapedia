import React, {useState, useEffect} from "react"
import Search from "./search"
import Link from "react"
const Cube = (props) =>{

    if(props.cube){
    return( 
          <div className="cube">
           <img alt="logo" className="cube" src={props.cube.imageUrl}/>
           <p className="name">{props.cube.name}</p>
           <p><span>Difficulty level:</span> {props.cube.diff}</p>
           <a className="btn" href={`/details/${props.cube._id}`}>Details</a>
         </div>
         )
    }else{
        return(
            
            <div>
            <h1 style={{textAlign:"center;"}}> no cubes, you can add one</h1>
            </div>
            )
    }
}

const Home = () => {
    const [cubes, setCubes] = useState()
        useEffect( () => {
        async function fetchData(){
            let res = await fetch("http://localhost:4500/")
            let Cubes = await res.json()
            console.log(Cubes)
             setCubes(Cubes)
        }
        fetchData()
        }, [])
    
        const cubeLay = cubes?.map(cube => <Cube key={cube._id} cube={cube}/>)
        console.log(cubeLay)
        
        return(
        <div>
            <Search/>
            <h1>Browser</h1>
            {cubeLay}
        </div>
        )
    }

export default Home