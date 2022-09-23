import React, {useEffect, useState}  from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Paper, Box, Card, Grid } from '@mui/material'
import w0 from "../img/1w.jpg";
import w1 from "../img/2w.jpg";
import w2 from "../img/3w.jpg";
import { Link } from 'react-router-dom';
import { publicRequest } from "../requestMethods";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};



const MultiScrollFeature = (props) => {
  const [product, setProduct] = useState([]);
  var items = [
    { "id": "1", "name": "Lamp Cgair", "image": w0 },
    { "id": "2", "name": "Lamp Cgair2", "image": w1 },
    { "id": "3", "name": "Lamp Cgair", "image": w2 },
    { "id": "4", "name": "Lamp Cgair", "image": w1 },
    { "id": "5", "name": "Lamp Cgair", "image": w0 },
    { "id": "6", "name": "Lamp Cgair", "image": w0 },
    { "id": "7", "name": "Lamp Cgair", "image": w1 },
    { "id": "8", "name": "Lamp Cgair", "image": w0 },
    { "id": "9", "name": "Lamp Cgair", "image": w0 },
  ]

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/product/product/");
        setProduct(res.data);
        console.log(res.data)
      } catch { }
    };
    getProduct();
  }, []);
  return (
    <Box sx={{ height: "23vh", position: "relative", top: { md: "25rem" } }}>
      <Carousel responsive={responsive}>
        {product.map((da) => {
          return <Paper key={da._id} sx={{ width: "220px", height: "287px" }}>
            <img src={da.img} width="220px" height="256px"></img><br></br>
            <Link to={`/post/${da._id}`} style={{ width: "220px", height: "10px" }}>{da.title}</Link >
          </Paper>;
        })}



      </Carousel>
    </Box>
  )
}

export default MultiScrollFeature