import { Link, List, ListItem, ListSubheader } from '@mui/material'
import React from 'react'

const Categories = () => {
    var items=[
        {"categories":"Accessories"},{"categories":"Accessories"},{"categories":"Accessories"},
        {"categories":"Accessories"},{"categories":"Accessories"},{"categories":"Accessories"},
        {"categories":"Accessories"},{"categories":"Accessories"},{"categories":"Accessories"},
        {"categories":"Accessories"},{"categories":"Accessories"},{"categories":"Accessories"},
        {"categories":"Accessories"},{"categories":"Accessories"},{"categories":"Accessories"}
    ]
  return (
    <div>
        <List sx={{border:"1px solid lightgray"}}>
            <ListSubheader sx={{fontSize:"18px", mt:"-8px",color:"black", fontWeight:"700",backgroundColor:"lightgray", fontFamily:"Poppins, sans-serif"}}>CATEGORIES</ListSubheader>
            {items.map((item, index)=>{
                 return <ListItem key={index.toString()} sx={{borderBottom:"1px solid lightgray", pt:"0.8rem", pb:"0.8rem"}}><Link sx={{textDecoration:"none", color:"#888888", "&:hover":{color:"#42cdac"}}}>{item.categories}</Link></ListItem>
            
            })}
           </List>
    </div>
  )
}

export default Categories