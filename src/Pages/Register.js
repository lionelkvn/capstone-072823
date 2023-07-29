import React from 'react'
import './Login.css'
import Navbar from '../Component/Navbar/Navbar'
import RegistrationForm from '../Component/RegistrationForm/RegistrationForm'

const Register = () => {
  return (
    <div>
        <Navbar />
        <div className='content'>
        <RegistrationForm />
        </div>
        
    </div>
  )
}

export default Register