import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Nolark1 from '../../images/nolark_1.PNG';
import Nolark2 from '../../images/nolark_2.PNG';
import Nolark3 from '../../images/nolark_3.PNG';
import Nolark4 from '../../images/nolark_4.PNG';

export default function Slider() {
  const datas = [
    {
      id:1,
      image: Nolark1,
    },
    {
      id:2,
      image: Nolark2,
    },
    {
        id:3,
        image: Nolark3,
    },
    {
        id:4,
        image: Nolark4,
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
