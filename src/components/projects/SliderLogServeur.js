import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import LogServeur1 from '../../images/LogServeur_1.PNG';
import LogServeur2 from '../../images/LogServeur_2.PNG';
import LogServeur3 from '../../images/LogServeur_3.PNG';
import LogServeur4 from '../../images/LogServeur_4.PNG';

export default function Slider() {
  const datas = [
    {
      id:1,
      image: LogServeur2,
    },
    {
      id:2,
      image: LogServeur1,
    },
    {
      id:3,
      image: LogServeur4,
    },
    {
      id:4,
      image: LogServeur3,
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
        <div className ="image" key={slide.id}>
          <img src ={slide.image} alt=""></img>
        </div>
      ))}
    </Carousel>
  )
}
