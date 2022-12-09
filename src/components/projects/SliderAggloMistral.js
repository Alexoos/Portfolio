import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import AggloMistral1 from '../../images/agglomistral_1.PNG';
import AggloMistral2 from '../../images/agglomistral_2.PNG';
import AggloMistral3 from '../../images/agglomistral_3.PNG';
import AggloMistral4 from '../../images/agglomistral_4.PNG';
import AggloMistral5 from '../../images/agglomistral_5.PNG';
import AggloMistral6 from '../../images/agglomistral_6.PNG';
export default function Slider() {
  const datas = [
    {
      id:1,
      image: AggloMistral1,
    },
    {
      id:2,
      image: AggloMistral2,
    },
    {
      id:3,
      image: AggloMistral3,
    },
    {
      id:4,
      image: AggloMistral4,
    },
    {
      id:5,
      image: AggloMistral5,
    },
    {
      id:6,
      image: AggloMistral6,
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
        <div className ="image" key={slide.id}>
          <img className='photoAggloMistral' src ={slide.image} alt=""></img>
        </div>
      ))}
    </Carousel>
  )
}
