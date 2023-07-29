import React from 'react';
import './ServicePage.css';

const ServicePageLBI = () => {
  return (
    <div id="ServicePage" className="ServicePage-container">
            <div className='header'>
            <h1>Logo & Brand Identity</h1> 
            </div>
            <div id="Logo" className="All-container">
              <div class="All-Image">
              <a href="/logolisting">
              <img src="./logoImg.jpeg" alt="Service Page"/>
              </a>
              </div>
              <div class='All-Content'>
              <h1 class="primary-color"><a href="/logolisting">Logo Designs</a></h1> 
                    <h2>The key to a successful logo design is simplicity, versatility, and relevance to the brand's identity. It should be scalable to various sizes, from small applications like business cards to larger ones like billboards. Understanding the target audience and brand message is crucial in selecting the most appropriate style for a logo design.
                  </h2>
              </div>
            </div>
            <div id="Logo" className="All-container">
              <div class="All-Image">
              <img src="./logoImg.jpeg" alt="Service Page"/>
              </div>
              <div class='All-Content'>
              <h1 class="primary-color"><a href="/">Business Card Designs</a></h1> 
                    <h2>Should exude sophistication and professionalism while remaining visually captivating. The combination of elegant colors, refined typography, and well-organized information will leave a lasting impression on potential clients, making them more likely to reach out and engage with your business.
                  </h2>
              </div>
            </div>
    </div>
  );
};

export default ServicePageLBI;