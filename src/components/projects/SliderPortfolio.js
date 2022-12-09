import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default function Slider() {
  const datas = [
    {
      id:1,
      image: "test",
    },
    {
      id:2,
      image: "test",
    },
    {
      id:3,
      image: "test",
    },
    {
      id:4,
      image: "test",
    },
  ]
  return (
    <Carousel
      autoPlay 
      interval={5000} 
      infiniteLoop 
      thumbWidth={80} 
      showIndicators={false} 
      showStatus={false}
      width={250}
    >
      {datas.map(slide =>(
        <div key={slide.id}>
          <img  src ={slide.image} alt=""></img>
        </div>
      ))}
    </Carousel>
  )
}
