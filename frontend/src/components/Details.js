import React from "react";
import { useEffect, useState, } from "react";
import { useParams } from "react-router-dom";

const ShowCube = (props) =>{
 return  props.cube.owner ?
    <>
    <h1>{props.cube.name}</h1>
    <img class="cube" src={props.cube.imageUrl}/>
    <div class="details">
    <p><span>Description:{props.cube.des}</span></p>
    <p><span>Difficulty level:{props.cube.diff}</span></p>
    <a class="btn" href="/">Back</a>
    
    <a class="btn" href={`/attach/accessory/${props.cube._id}`}>Add Accessory</a>
    <a class="btn" href={`/edit/${props.cube._id}`}>Edit</a>
    <a class="btn" href={`/delete/${props.cube._id}`}>Delete</a>    
    </div>
 </>
 : <>
 <h1>{props.cube.name}</h1>
 <img className="cube" src={props.cube.imageUrl}/>
 <div className="details">
   <p><span>Description:{props.cube.des}</span></p>
   <p><span>Difficulty level:{props.cube.diff}</span></p>
   <a class="btn" href="/">Back</a>   
 </div>
 </> 

}

const ShowAcc = (props) =>{
        let accessories = props.cube.accessories.map(acc=>{
            return(
            <div class="accessory">
                <img src={acc.imageUrl} alt="stickerName"/>
                <h3>{acc.name}</h3>
                <p>{acc.des}</p> 
            </div>
            )
        })
    return accessories.length > 0 ? accessories : <h3 class="italic">This cube has no accessories yet...</h3>
}


const Details = () =>{
    const [cube, setCube] = useState()
    const params = useParams()
    useEffect(() => {
        async function getCube(){
            let res = await fetch(`http://localhost:4500/details/${params.id}`)
            let Cube = await res.json()
            Cube = Cube._doc
            console.log(Cube)
            setCube(Cube)
        }
        getCube()
    },[])    
     return(
    <>
       {cube && <ShowCube cube={cube}/>}
       {cube && <ShowAcc cube={cube}/>}
    </>
    )
}

export default Details