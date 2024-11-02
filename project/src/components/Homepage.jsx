import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material'
import axios from 'axios';

const Homepage = () => {
    var[val,Setname]=useState([])
    useEffect(()=>{
      axios.get("https://fakestoreapi.com/products")
    .then((product)=>{
        Setname(product.data)
        console.log(val)

    })
    },[])
    
  return (
    
    <div><br/><br/>
    <h1>PRODUCTS</h1>
       <Grid container spacing={2}>
            {
                    val.map((user)=>{
                        return(
                            <Grid item xs={12} sm={6} md={4}  >
                           
            
            
            <Card sx={{maxWidth:345 }}>

      <CardMedia
        sx={{ height: 200 }}
        image={user.image}
        
    />
      <CardContent>
        <Typography gutterBottom variant="h6"sx={{fontFamily:'Algerian'}}>
        {user.title}
        </Typography>
        <Typography variant="body2" sx={{fontSize:20,fontFamily:'Adobe Garamond Pro Bold'}}>
       Price:{user.price}₹</Typography>
        <Typography variant="body2" sx={{fontSize:20,fontFamily:'Adobe Garamond Pro Bold' }}>
        Category:{user.category}</Typography>

      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
       
      </CardActions>
    </Card>
    
    </Grid>
    
    
      )
    })
}
   
    </Grid>            
    </div>
  )
}

export default Homepage