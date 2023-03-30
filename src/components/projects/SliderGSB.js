import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import GSB1 from '../../images/gsb_1.PNG';
import GSB2 from '../../images/gsb_2.PNG';
import GSB3 from '../../images/gsb_3.PNG';
import GSB4 from '../../images/gsb_4.PNG';
import GSB5 from '../../images/gsb_5.PNG';
export default function Slider() {
  const datas = [
    {
      id:1,
      image: GSB1,
    },
    {
      id:2,
      image: GSB3,
    },
    {
      id:3,
      image: GSB5,
    },
    {
      id:4,
      image: GSB4,
    },
    {
        id:5,
        image: GSB2,
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
