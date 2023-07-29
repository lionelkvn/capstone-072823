import React from 'react';
import './Service.css';
import ServiceCard from '../ServiceCard/ServiceCard';

const Service = () => {
  const services = [
    {
      title: 'Logo & Brand Identity',
      description: 'Work in harmony to create a strong and cohesive brand presence. They communicate our brands values, differentiate us from competitors, and resonate with our target audience. Our logo and brand identity are the visual embodiment of our brands promise, ensuring that every interaction with our brand leaves a lasting impression.',
      imageUrl: '/img5.jpg', 
      linkUrl: '/service-logoandbranding'
    },
    {
      title: 'Print Design',
      description: 'Create visually stunning and effective print materials that capture attention, convey information, and leave a memorable impression on the audience. It combines artistic creativity, technical expertise, and a deep understanding of design principles to produce tangible and impactful designs that fulfill their intended purpose.',
      imageUrl: '/img4.jpg', 
      linkUrl: '/service-print'
    },
    {
      title: 'Marketing Design',
      description: 'Target audience demographics, brand values, and marketing objectives. It involves a blend of creativity, strategic thinking, and an understanding of design principles to create visually appealing materials that resonate with the intended audience, convey key messages, and drive desired actions.',
      imageUrl: '/img13.jpg', 
      linkUrl: '/service-marketing'
    },
  ];

  return (
    <div id="Services" className="Services">
      <h1><span className="primary-color">Our</span> Services</h1>
      <div className="service-card-container">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.linkUrl ? <a href={service.linkUrl}>{service.title}</a> : service.title}
            description={service.description}
            imageUrl={service.imageUrl} 
            linkUrl={service.linkUrl} 
          />
        ))}
      </div>
    </div>
  );
};

export default Service;

