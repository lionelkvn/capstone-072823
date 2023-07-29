import React, { useState }  from 'react';
import './Contact.css';
import axios from 'axios';

const Contact = () => {

 const [name,setName] = useState('');
 const [contactEmail,setContactEmail] = useState('');
 const [messageForm, setMessageForm] =  useState('');
 const [interestedIn, setInterestedIn] = useState('')

//   const handleInterestedInTypeChange = (e) => {
//     console.clear();
//     console.log(interestedIn[e.target.value]);
//   };  

  const message = () => {
    axios.post('http://localhost:3001/message', {
        name: name,
        interestedIn: interestedIn,
        email: contactEmail,
        message: messageForm,
    
    })
    .then((response) =>{
        console.log(response);
        alert("Message sent successfully");
    })
    .catch((error) =>{
        console.error("Message sent unsuccessfully")
    })
  }
  return (
    <div id="Contact" className="Contact">
      <h1>Work with the <span className="primary-color">Ink</span></h1>
      <h4>Do you have a project you would like us to work on? Or perhaps a few questions?</h4>
      <h4>Contact us and we will be more than happy to assist you.</h4>
      <div className="Contact-wrapper">
        <div className="Contactcontent1">
          <form action="/action_page.php">
            <label htmlFor="name">Name</label>
            <input 
            value={name} onChange={(e) =>
            {setName(e.target.value);}}
             type="text" id="name" name="name" placeholder="Your name.." />
            <label htmlFor="interested">What are you interested</label>
            <input value={interestedIn} onChange={(e)=>
            {setInterestedIn(e.target.value);}} type='text' id='interestedIn' name='interestedIn' placeholder='Logo and Design, Print and Design, Marketing' />
            {/* // <select onChange={handleInterestedInTypeChange}>
            //   {interestedIn.map((address, key) => (
            //     <option key={key} value={key}>{address}</option>
            //   ))}
            // </select> */}

            <label htmlFor="Email">Email</label>
            <input value={contactEmail} onChange={(e) =>
                {setContactEmail(e.target.value);}} type="text" id="Email" name="Email" placeholder="Your email.." />

            <label htmlFor="Message">Message</label>
            <textarea value={messageForm} onChange={(e) => {setMessageForm(e.target.value);}}
            type="text" id="Message" rows="4" name="message" placeholder="Tell us about your project.."></textarea>

            <button type="submit" onClick={message} value="Submit">Submit</button>
          </form>
        </div>
        <div className="Contactcontent2">
          <h3>2 Block 15 Notre Dame Village,</h3>
          <h3>Cotabato City, 9600</h3>
          <h3>Maguindanao</h3>
          <h3>Philippines</h3>
          <div className="iframe-wrapper">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.4404696780266!2d124.24243817509056!3d7.190477015053195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32563bd4359cb3a7%3A0xcf09d5ef99777d46!2sBlock%2015%20Notre%20Dame%20village!5e0!3m2!1sen!2sph!4v1687772777378!5m2!1sen!2sph"
              width="600"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
