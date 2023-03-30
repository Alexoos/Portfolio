import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Parc1 from "../../images/parc_1.png";
import Parc2 from "../../images/parc_2.PNG";
import Parc3 from "../../images/parc_3.PNG";
import Parc4 from "../../images/parc_4.PNG";
export default function Slider() {
  const datas = [
    {
      id: 1,
      image: Parc1,
    },
    {
      id: 2,
      image: Parc2,
    },
    {
      id: 3,
      image: Parc3,
    },   
    {
      id: 4,
      image: Parc4,
    },
  ];
  return (
    <Carousel
      autoPlay
      interval={5000}
      infiniteLoop
      thumbWidth={80}
      showIndicators={true}
      showStatus={false}
    >
      {datas.map((slide) => (
        <div key={slide.id}>
          <img src={slide.image} alt=""></img>
        </div>
      ))}
    </Carousel>
  );
}
