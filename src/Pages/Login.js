import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import LoginForm from '../Component/LoginForm/LoginForm'

const Login = () => {
  return (
    <div>
        <Navbar />
        <div className='content'>
        <LoginForm />
        </div>

    </div>
  )
}

export default Login