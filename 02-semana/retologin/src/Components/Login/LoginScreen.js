import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';

import './login.css'

export const LoginScreen = () => {
  const [input, handleInputChange] = useForm({
    name: '',    
    password: ''
  })

  const [messageSuccess, setMessageSuccess] = useState('')
  const [image, setImage] = useState('login')

  const { name, password } = input;

  const handleClick = () => { 
   console.log('click');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name.trim().length > 2 && password.trim().length > 2){
      setMessageSuccess('Login Exitoso')
      setImage('success')
    }
    if(name.trim().length === 0 && password.trim().length === 0){
      setMessageSuccess('Debe ingresar su usuario')
    }
    
  } 
    return (
        <div className="loginContainer">
            <div className="loginSignIn">              
              <form onSubmit={ handleSubmit } className="loginForm">
                <h2>Sign In</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <input className="iptPrimary" placeholder="User Name" type="text" autoComplete="off" name="name" value={ name } onChange = { handleInputChange }/>
                <input className="iptPrimary" placeholder="Password" type="password" name="password" value={ password } onChange = { handleInputChange }/>
                <button className="btnPrimary" type="submit" onClick={ handleClick }> Login </button>
              </form>
              <div className="loginSuccessMessage">
                { messageSuccess }
              </div>
            </div>
            <div className="loginBackground">
              <img src={`./static/${image}.jpg`} alt="Login" className="img-responsive"/>
            </div>
        </div>
    )
}
