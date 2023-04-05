import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import SDC_1 from '../../images/SDC_1.PNG';
import SDC_2 from '../../images/SDC_2.PNG';
import SDC_3 from '../../images/SDC_3.PNG';
import SDC_4 from '../../images/SDC_4.PNG';
export default function Slider() {
  const datas = [
    {
      id:1,
      image: SDC_1,
    },
    {
      id:2,
      image: SDC_2,
    },
    {
      id:3,
      image: SDC_3,
    },
    {
      id:4,
      image: SDC_4,
    },
  ]
  return (
    <Carousel
      interval={5000} 
      infiniteLoop 
      thumbWidth={80} 
      showIndicators={false} 
      showStatus={false}
      width={250}
    >
      {datas.map(slide =>(
        <div className='photoSDC' key={slide.id}>
          <img  src ={slide.image} alt=""></img>
        </div>
      ))}
    </Carousel>
  )
}
