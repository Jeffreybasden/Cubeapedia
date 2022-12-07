import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';

const Cube = (props) =>{

    if(props.cube){

    return(
         <Card key={props.cube._id} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={props.cube.imageUrl}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {props.cube.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">{`Difficulty level: ${props.cube.diff}`}</Typography>
      </CardContent>
      <CardActions>
        <Button href={`/details/${props.cube._id}`} size="small">Details</Button>
      </CardActions>
    </Card>
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
    useEffect(() => {
    const fetchData = async() =>{
    let res = await fetch("http://localhost:4500/")
    let Cubes =  await res.json()
    console.log(Cubes)
     setCubes(Cubes)
    }
fetchData()
    })
    const cubeLay = cubes.map(cube=> <Cube cube={cube}/>)
    console.log(cubeLay)
    return(
    <div>{cubeLay}</div>
    )
}

export default Home