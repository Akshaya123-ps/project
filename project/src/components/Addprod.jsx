import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'

const Addprod = () => {
  return (
    <div><br/><br/><br/>
    <div id="idi"><br/><br/>
    <h1 id="h1">List your Products</h1>
    <TextField variant='outlined' label='product name'>Product name</TextField><br/><br/>
    <TextField   multiline maxRows={4} label='Description'sx={{width:210}}>Description</TextField><br/><br/>
   <FormControl sx={{width:210}}>
  <InputLabel >Category</InputLabel>
  <Select
 
    label="category">
    <MenuItem >Shirt</MenuItem>
    <MenuItem >Bags</MenuItem>
    <MenuItem >Jewelery</MenuItem>
    <MenuItem >Others</MenuItem>
  </Select>
</FormControl><br/><br/>
<TextField variant='outlined' label='price'>Price</TextField><br/><br/>
<Button variant='contained' color='grey'>Submit</Button><br/><br/><br/><br/>

     
    </div>
    </div>
  )
}

export default Addprod