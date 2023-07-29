import React, { useState } from 'react';
import './LoginForm.css';
import axios from 'axios';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  

  const login = () =>{
    axios.post('http://localhost:3001/login',{
      email:email,
      password: pass,
    })
    .then ((response) =>{
      console.log(response);
      alert("login successful");
    })
    .catch((error) =>{
      console.error('login was not successful',error);
    })
  }

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//         const response = await axios.post('/login', {
//           email,
//           password: pass,
//         });
  
//         // Assuming your backend returns a success message or a token upon successful login
//         // You can customize this based on your backend response structure
//         if (response.data.success) {
//           // Redirect to the dashboard page or perform any other action
//           alert('Login successful!');
//           // Example of redirecting to a dashboard page
//           // window.location.href = '/dashboard';
//         } else {
//           alert('Invalid credentials. Please try again.');
//         }
//       } catch (error) {
//         console.error('Error during login:', error);
//         alert('An error occurred during login.');
//       }
//     };

//     // Make a POST request to the backend API
//     axios.post('/api/login', userData)
//       .then((response) => {
//         console.log('Login successful:', response.data);
//         // Perform actions after successful login (e.g., redirect to dashboard)
//       })
//       .catch((error) => {
//         console.error('Error logging in:', error);
//         // Display error message to the user (e.g., invalid credentials)
//       });
//   };

  return (
    <div className='form-wrapper'>
      <form  className='form-container'>
        <div>
          <h4>Please log in to continue</h4>
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
        </div>
        <div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            placeholder='email'
          />
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
        </div>
        <div>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type='password'
            placeholder='password'
          />
        </div>
        <div className='button-container'>
          <button className='button' onClick={login}>
            {/* <a href="/"> */}
            Log in
            {/* </a> */}
          </button>
        </div>
        <div>
          <h6>
            Don't have an account? Click{' '}
            <a href='/register'>here</a> to register.
          </h6>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
