import React from 'react';
import CarouselSlider from '../CarouselSlider/CarouselSlider';
import './Portfolio.css';

const Portfolio = () => {
  const carouselItems1 = [
    {
      title: 'Surya 1',
      imageUrl: './Surya1.jpg',
    },
    {
      title: 'Surya 2',
      imageUrl: './Surya2.jpg',
    },
    {
      title: 'Surya 3',
      imageUrl: './Surya3.jpg',
    },
    {
      title: 'Surya 4',
      imageUrl: './Surya4.jpg',
    },
  ];
  const carouselItems2 = [
    {
      title: 'BrowClinic Beauty Academy Bundle Design',
      imageUrl: './brow1.jpg',
    },
    {
      title: 'BrowClinic Beauty Academy Bundle Design',
      imageUrl: './brow2.jpg',
    },
    {
      title: 'BrowClinic Beauty Academy Bundle Design',
      imageUrl: './brow3.jpg',
    },
    {
      title: 'BrowClinic Beauty Academy Bundle Design',
      imageUrl: './brow4.jpg',
    },
    {
      title: 'BrowClinic Beauty Academy Bundle Design',
      imageUrl: './brow5.jpg',
    },
  ];
  const carouselItems3 = [
    {
      title: 'Luminescence Branding!',
      imageUrl: './lum1.jpg',
    },
    {
      title: 'Luminescence Branding!',
      imageUrl: './lum2.jpg',
    },
    {
      title: 'Luminescence Branding!',
      imageUrl: './lum3.jpg',
    },
    {
      title: 'Luminescence Branding!',
      imageUrl: './lum4.jpg',
    },
  ];
  const carouselItems4 = [
    {
      title: 'Pamela Duron Bundle Design!',
      imageUrl: './Duron1.jpg',
    },
    {
      title: 'Pamela Duron Bundle Design!',
      imageUrl: './Duron2.jpg',
    },
    {
      title: 'Pamela Duron Bundle Design!',
      imageUrl: './Duron3.jpg',
    },
    {
      title: 'Pamela Duron Bundle Design',
      imageUrl: './Duron4.jpg',
    },
    {
      title: 'Pamela Duron Bundle Design',
      imageUrl: './Duron5.jpg',
    },
  ];
  const carouselTitle1 = 'The Surya Event Project!';
  const carouselTitle2 = 'BrowClinic Beauty Academy Project!';
  const carouselTitle3 = 'Luminescence Branding!';
  const carouselTitle4 = 'Pamela Duron Bundle Design!';
  return (
    <div id="Portfolio" className='Portfolio'>
      <h1><span class="primary-color">Our </span><span>Project</span></h1> 
      <div class="PortfolioContent Container">
          <div class="CarouselContainer">
          <h2>{carouselTitle1}</h2>
          <CarouselSlider items={carouselItems1} />
          </div>
          <div class="CarouselContainer">
          <h2>{carouselTitle3}</h2>
          <CarouselSlider items={carouselItems3} />
          </div>
          <div class="CarouselContainer">
          <h2>{carouselTitle2}</h2>
          <CarouselSlider items={carouselItems2} />
          </div> 
          <div class="CarouselContainer">
          <h2>{carouselTitle4}</h2>
          <CarouselSlider items={carouselItems4} />
          </div> 
        </div>
    </div>
  );
};

export default Portfolio;