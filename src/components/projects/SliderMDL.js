import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import MDL1 from '../../images/mdl_1.PNG';
import MDL2 from '../../images/mdl_2.PNG';

export default function Slider() {
  const datas = [
    {
      id:1,
      image: MDL1,
    },
    {
      id:2,
      image: MDL2,
    },
  ]
  return (
    <Carousel 
      interval={5000} 
      infiniteLoop 
      thumbWidth={80} 
      showIndicators={true} 
      showStatus={false}
    >
      {datas.map(slide =>(
        <div key={slide.id}>
          <img  src ={slide.image} alt=""></img>
        </div>
      ))}
    </Carousel>
  )
}
