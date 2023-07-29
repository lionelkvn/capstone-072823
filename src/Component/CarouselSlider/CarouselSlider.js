import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './CarouselSlider.css';

const CarouselSlider = ({ items, autoplayInterval }) => {
  return (
    <Carousel className="main_slider" autoPlay={true} interval={autoplayInterval} infiniteLoop={true}>
      {items.map((item, index) => (
        <div key={index}>
          <img src={item.imageUrl} alt={item.title} />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselSlider;
