import {  AddOutlined, Home} from '@mui/icons-material'
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import CategoryIcon from '@mui/icons-material/Category';
import LensBlurTwoToneIcon from '@mui/icons-material/LensBlurTwoTone';

const Navbar = () => {
  return (
    <div>
        <AppBar
        sx={{ background: 'rgb(2,0,36)',
            background: 'linear-gradient(90deg, rgba(2,0,36,1) 3%, rgba(10,96,124,1) 52%, rgba(60,191,218,1) 79%)'}}>
            <Toolbar>
            <IconButton>
                
                 </IconButton>
                <LensBlurTwoToneIcon sx={{fontSize:'40px'}}/> &nbsp;&nbsp;&nbsp;
                 
                 <Typography variant='h6'sx={{fontSize:30,fontFamily:"casillar",fontWeight:"bold"}}>MadeWell</Typography>
                 <div id="i">
            <Link to='/home'><Button variant="contained" color="blue"><Home sx={{color:'white'}}/></Button></Link>
            <Link to='/add'> <Button variant="contained"color="blue" ><CategoryIcon sx={{color:'white'}}/>  </Button></Link>
                </div>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar