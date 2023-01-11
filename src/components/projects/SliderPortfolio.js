import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Portfolio1 from '../../images/Portfolio1.PNG';
import Portfolio2 from '../../images/Portfolio2.PNG';
import Portfolio3 from '../../images/Portfolio3.PNG';
import Portfolio4 from '../../images/Portfolio4.PNG';
export default function Slider() {
  const datas = [
    {
      id:1,
      image: Portfolio1,
    },
    {
      id:2,
      image: Portfolio2,
    },
    {
      id:3,
      image: Portfolio3,
    },
    {
      id:4,
      image: Portfolio4,
    },
  ]
  return (
    <Carousel
      autoPlay 
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
