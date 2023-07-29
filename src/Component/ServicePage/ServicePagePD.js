import React from 'react';
import './ServicePage.css';

const ServicePage = () => {
  return (
    <div id="ServicePage" className="ServicePage-container">
            <div className='header'>
            <h1>Print Designs</h1> 
            </div>
            <div id="Logo" className="All-container">
              <div class="All-Image">
              <img src="./Brochureimg.jpg" alt="Service Page"/>
              </div>
              <div class='All-Content'>
              <h1 class="primary-color"><a href="/">Brochure Designs</a></h1> 
                  <h2>
                  In today's fast-paced digital world, where information bombards us from all angles, brochures remain a timeless and effective medium for communication. Brochure designs have the unique ability to captivate, engage, and persuade audiences, making them an indispensable tool for businesses, organizations, and individuals alike. In this blog post, we will explore the art of crafting captivating brochure designs that unleash the power of visual storytelling, leaving a lasting impression on your target audience.
                  </h2>
              </div>
            </div>
            <div id="Logo" className="All-container">
              <div class="All-Image">
              <img src="./Posterimg.jpg" alt="Service Page"/>
              </div>
              <div class='All-Content'>
              <h1 class="primary-color"><a href="/">Poster Designs</a></h1> 
                    <h2>
                    Poster designs are a captivating fusion of art, storytelling, and communication. By understanding the power of visual communication, mastering the art of storytelling, and embracing creativity and innovation, you can create posters that not only communicate your message effectively but also leave a lasting impression on your audience. So, let your imagination soar, and embark on a journey to design posters that speak volumes, ignite emotions, and make a meaningful impact.
                    </h2>
              </div>
            </div>
            <div id="Logo" className="All-container">
              <div class="All-Image">
              <img src="./Menuimg.jpg" alt="Service Page"/>
              </div>
              <div class='All-Content'>
              <h1 class="primary-color"><a href="/">Menu Designs</a></h1> 
                    <h2>
                    Harmonious blend of aesthetics and functionality. We have carefully selected fonts, colors, and graphic elements that evoke a sense of ambiance and set the right tone for the dining experience. Each section is organized thoughtfully, making it easy for our guests to navigate through the diverse range of offerings and find their desired choices effortlessly.
                    Additionally, we believe in embracing sustainability, and our menu design reflects this commitment. We utilize eco-friendly materials and printing techniques, ensuring that our menu aligns with our restaurant's eco-conscious values.
                   </h2>
              </div>
            </div>
    </div>
  );
};

export default ServicePage;