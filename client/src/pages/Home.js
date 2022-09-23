import React from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import { Paper, Button, Typography, Box } from '@mui/material'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import w0 from "../img/6w.jpg";
import w1 from "../img/2w.jpg";
import w2 from "../img/3w.jpg";
//import UnderHomeSection from '../components/UnderHomeSection';
import { style } from '@mui/system';
import styled from 'styled-components';
import MultiScrollFeature from './MultiScrollFeature';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Typo = styled(Button)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}))
const Carosal = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100vh",
  position: "absolute",
  top: "0",
  zIndex: '-1'
}))
const Home = (props) => {
  var items = [
    { name: w0 },
    { name: w1 },
    { name: w2 },
  ]
  return (
    <>
      <Box sx={{
        position: "relative",
        top: "8rem",
        height: { xs: "50vh", md: "100vh" },
      }}>
        <Box sx={{
          height: { xs: "17vh", md: "100vh" },
          position: "relative",
          display: "flex", flexDirection: "column", justifyContent: { xs: "top", md: "center" },
          alignItem: "center",
          margin: { xs: "0", md: "0 20rem" },
          padding: { xs: "4rem", md: "0" },
        }}>
          <Typo>
            <Typography variant='h4' sx={{ color: "white", fontSize: { xs: "15px", md: "35px" }, }}>
              Welcome to our
            </Typography>
            <Typography variant='h2' sx={{ color: "white", fontSize: { xs: "20px", md: "50px" }, fontWeight: "700" }}>
              Destino Furniture
            </Typography>
            <Typography variant='h2' sx={{ color: "white", fontSize: { xs: "20px", md: "50px" }, fontWeight: "700" }}>
              Collection
            </Typography>
          </Typo>
          <Button sx={{
            backgroundColor: "black",
            color: "white",
            margin: { xs: "0 4rem", md: "0 20rem" },
            "&:hover": {
              backgroundColor: "#42cdac",
              color: "white",
            }
          }}>
            Shop
          </Button>
        </Box>
        <Carosal>
          <Carousel
            responsive={responsive}
            transitionDuration={500}
            autoPlay={true}
            rewind={true}
            autoPlaySpeed={1000}
            customTransition="all .5"
          // NextIcon={<MdKeyboardArrowRight />}
          // PrevIcon={<MdKeyboardArrowLeft />}
          >
            {
              items.map((item) => (
                <Paper>
                  <img src={item.name} style={{ width: "100%", height: "100%" }}></img>
                </Paper>
              ))
            }
          </Carousel>
        </Carosal>
      </Box>
      <MultiScrollFeature />
    </>
  )
}

export default Home