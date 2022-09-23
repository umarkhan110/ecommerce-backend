import { Breadcrumbs, Link, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import ShopCart from "../components/Cart"
const Cart = () => {
    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }
  return (
    <Box sx={{  position: "relative", top: { md: "10rem" },mr:"4rem", ml:"4rem" }}>
            <div role="presentation" onClick={handleClick} >
                <Breadcrumbs aria-label="breadcrumb">
                    <Link
                        underline="hover"
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="inherit"
                        href="/"
                    >
                        MUI
                    </Link>
                    <Typography
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="text.primary"
                    >
                        Shopping Cart
                    </Typography>
                </Breadcrumbs>
            </div>
           <Typography  sx={{fontSize:"3.6rem",color:"#666666", fontWeight:"600", fontFamily:"Poppins, sans-serif"}}>Shopping Cart</Typography>
       <ShopCart />
        </Box>
  )
}

export default Cart