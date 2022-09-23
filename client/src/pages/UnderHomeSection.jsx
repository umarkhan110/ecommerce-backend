import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Box, Card, Grid } from '@mui/material'
import w0 from "../img/1w.jpg";
import w1 from "../img/2w.jpg";
import w2 from "../img/3w.jpg";


const UnderHomeSection = (props) => {
  var data = [
    {  "id":"1", "name":"Lamp Cgair", "image": w0},
    {  "id":"2", "name":"Lamp Cgair2", "image": w1},
    {  "id":"3", "name":"Lamp Cgair", "image": w2},
    {  "id":"4", "name":"Lamp Cgair", "image": w1},
    {  "id":"5", "name":"Lamp Cgair", "image": w0},
    {  "id":"6", "name":"Lamp Cgair", "image": w0},
    {  "id":"7", "name":"Lamp Cgair", "image": w1},
    {  "id":"8", "name":"Lamp Cgair", "image": w0},
    {  "id":"9", "name":"Lamp Cgair", "image": w0},
]

console.log(data.length)
const sliderItems = data.length > 5 ? 5 : data.length;
const items1 = [];

for (let i = 0; i < data.length; i += sliderItems) {
  if (i % sliderItems === 0) {
    items1.push(
      <Card raised  key={i.toString()} sx={{margin:"1rem 3rem"}}>
        <Grid container spacing={0} gap={4}>
          {data.slice(i, i + sliderItems).map((da, index) => {
            return <Paper key={index.toString()} sx={{width:"220px", height:"287px"}}>
              <img src={da.image} width="220px" height="256px"></img><br></br>
              <a style={{width:"220px", height:"10px"}}>{da.name}</a>
              </Paper>;
          })}
        </Grid>
      </Card>
    );
  }
}
  return (
    <Box sx={{height:"23vh", position:"relative", top:{ md:"8rem"}}}>
      <Carousel
     animation="fade"
     indicators={false} autoPlay={false}  cycleNavigation timeout={300}
     navButtonsAlwaysVisible={true}>
            {
                items1
            }
        </Carousel>
    </Box>
  )
}

export default UnderHomeSection