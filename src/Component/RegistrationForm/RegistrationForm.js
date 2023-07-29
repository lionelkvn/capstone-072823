import React ,{ useState } from 'react';
import "./RegistrationForm.css";
// import { toast } from 'react-toastify';
import axios from 'axios';



const RegistrationForm = () => {
    const [emailReg, setEmailReg] = useState('');
    const [passReg, setPassReg] = useState('');
    const [cityAddress, setCityAdress] = useState('');
    const [contactNo, setContactNo] = useState('');

    const register = () => {
        axios.post('http://localhost:3001/register', {
            email: emailReg,
            password: passReg,
            cityAddress: cityAddress,
            contactNo: contactNo,
        })
        .then((response) => {
            console.log(response);
            alert("Registration Successful");
        })
        .catch((error) => {
            console.error('Error registering user:', error);
            // Handle error and show appropriate message to the user
        });
    };

  return (
    <div className='body'>
          <div className='reg-form-wrapper'>
       
       

       <form className='form-container'>
           
            <div>
               <h4>Fill in the form to create an account.</h4>
           </div>
           <div>
               <label htmlFor='email'>Email:</label>
           </div>
           <div>
               <input value={emailReg} onChange={(e) => {setEmailReg(e.target.value);}} type='email' placeholder='email'/>
           </div>
          <div> 
               <label htmlFor='password'>Password:</label>
          </div>
          <div>
               <input value={passReg} onChange={(e) => setPassReg(e.target.value)} type='password' placeholder='password'/>
          </div>
          {/* <div> 
               <label htmlFor='password'>Confirm Password:</label>
          </div>
          <div>
               <input value={confirmpass} onChange={(e) => setConfirmpass(e.target.value)} type='password' placeholder='confirm password'/>
          </div>
           */}
          <div>
                <label htmlFor='city-address'> City Address:</label>
         </div>
         <div>
            <input value={cityAddress} onChange={(e) => setCityAdress(e.target.value)} type='address' placeholder='city address' />
         </div>
         <div>
            <label htmlFor="contactNo"> Contact Number:</label>
        </div>
        <div>
            <input value={contactNo} onChange={(e)=> setContactNo(e.target.value)} type="tel" placeholder='Contact Number'  />
        </div>
          
          
          <div className="button-container">
               <button className="button" onClick={register} type='submit'>Sign up</button>
          </div>
          
        
           <div>
               <h6>Already have an account? click <a href='/login'> here</a> to sign in.</h6>
           </div>

          

        </form>
            
       
        </div>
    </div>
    
  )}
        

export default RegistrationForm;