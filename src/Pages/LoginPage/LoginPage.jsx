import React from 'react'
import LoginForm from '../../Components/LoginForm/LoginForm'
import NavBar from '../../Components/NavBar/NavBar'

function LoginPage() {
  return (
    <>
      <div data-testid="navbar-component">
        <NavBar />
      </div>
      <div data-testid="login-form-component">
        <LoginForm />
      </div>
    </>
  )
}

export default LoginPage