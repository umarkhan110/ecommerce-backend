import { Breadcrumbs, Button, Grid, Link, Typography } from '@mui/material';
import { Box } from '@mui/system'
import React, {useEffect, useState} from 'react'
import Categories from '../components/Categories';
import w0 from "../img/1w.jpg";
import w1 from "../img/2w.jpg";
import w2 from "../img/3w.jpg";
import { useLocation } from 'react-router-dom';
import { addProduct } from "../redux/CartRedux";
import { useDispatch } from "react-redux";
import { publicRequest } from "../requestMethods";
const Description = () => {
    var items = [
        { "id": "1", "name": "Lamp Cgair", "quantity": "1", "price": 30, "image": w0 },
        { "id": "2", "name": "Lamp Cgair", "quantity": "1", "price": 30, "image": w1 },
        { "id": "3", "name": "Lamp Cgair", "quantity": "1", "price": 30, "image": w2 },
        { "id": "4", "name": "Lamp Cgair", "quantity": "1", "price": 30, "image": w1 },
        { "id": "5", "name": "Lamp Cgair", "quantity": "1", "price": 30, "image": w0 },
        { "id": "6", "name": "Lamp Cgair", "quantity": "1", "price": 30, "image": w0 },
        { "id": "7", "name": "Lamp Cgair", "quantity": "1", "price": 30, "image": w1 },
        { "id": "8", "name": "Lamp Cgair", "quantity": "1", "price": 30, "image": w0 },
        { "id": "9", "name": "Lamp Cgair", "quantity": "1", "price": 30, "image": w0 },
    ]
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    console.log(product)
    const dispatch = useDispatch();
    useEffect(() => {
        const getProduct = async () => {
            // const post = items.find((p) => p.id.toString() === path);
            // setProduct(post);
            try {
                const res = await publicRequest.get("/product/find/" + path);
                setProduct(res.data);
              } catch {}
        };
        getProduct();
      }, [path]);
   

    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }

    const handleClick2 = () => {
        dispatch(
            addProduct({ ...product })
        );
    };
    return (
        <Box sx={{ position: "relative", top: { md: "10rem" }, mr: "4rem", ml: "4rem" }}>
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
                        {product.title}
                    </Typography>
                </Breadcrumbs>
            </div>
            <Grid container spacing={2} sx={{ mt: "1rem" }}>
                <Grid item md={3}>
                    <Categories />
                </Grid>
                <Grid item md={4}>
                    <Box sx={{ width: "418px", height: "418px" }}>
                        <img src={product.img} width="100%" height="100%"></img>
                    </Box>
                </Grid>
                <Grid item md={5}>
                    <Typography variant='h3'>{product.title}</Typography>
                    <Typography>${product.price}</Typography>
                    <Button onClick={handleClick2}>Add to Cart</Button>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Description