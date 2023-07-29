import React from 'react';
import './ServicePage.css';

const ServicePage = () => {
  return (
    <div id="ServicePage" className="ServicePage-container">         
            <div className='header'>
            <h1>Marketing Designs</h1> 
            </div>
            <div id="Logo" className="All-container">
              <div class="All-Image">
              <img src="./lum4.jpg" alt="Service Page"/>
              </div>
              <div class='All-Content'>
              <h1 class="primary-color"><a href="/">Social Media Designs</a></h1> 
                  <h2>
                  We have crafted a cohesive and recognizable identity across various platforms. Our goal is to foster a sense of community, actively interact with our audience, and inspire meaningful actions.                  
                  By employing a combination of vibrant aesthetics, creative templates, and strategic call-to-action strategies, we aim to leave a lasting impression on our followers. Our social media presence is not only a platform to promote our blog but also a space to connect with our audience on a personal level, sharing stories and experiences that resonate with them.
                  </h2>
              </div>
            </div>
            <div id="Logo" className="All-container">
              <div class="All-Image">
              <img src="./lum4.jpg" alt="Service Page"/>
              </div>
              <div class='All-Content'>
              <h1 class="primary-color"><a href="/">Signage Design</a></h1> 
                    <h2>
                    Poster designs are a captivating fusion of art, storytelling, and communication. By understanding the power of visual communication, mastering the art of storytelling, and embracing creativity and innovation, you can create posters that not only communicate your message effectively but also leave a lasting impression on your audience. So, let your imagination soar, and embark on a journey to design posters that speak volumes, ignite emotions, and make a meaningful impact.
                    </h2>
              </div>
            </div>
    </div>
  );
};

export default ServicePage;