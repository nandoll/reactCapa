import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useform'
import './formLogin.css'
export const FormLoginScreen = () => {
  const [input, handleInputChange] = useForm({
    name: '',    
    cardNumber: '',
    ccv: '',
    validDate: '',
    success: false
  })

  const { success } = input;

  useEffect(() => {
    handleInputChange
  }, [success])

  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log( input)
    console.log(success)
  }

  return (
    <div className="container">
      <div className="loginContainer">
        <form onSubmit={ handleSubmit } className="loginForm">
          <span className="title big">Payment Details { success ? <span>ok</span> : <span>no ok</span> }</span>
          
          <div className="loginForm">
            <input 
            className="iptPrimary radiusPrimary" 
            placeholder="Name on card" 
            autoComplete="off" 
            type="text" 
            name="name" 
            onChange={handleInputChange}/>
            
            <input 
            className="iptPrimary radiusPrimary" 
            placeholder="Card on number" 
            autoComplete="off" 
            type="text" 
            name="cardNumber" 
            onChange={handleInputChange}/>
            
            <input 
            className="iptPrimary radiusPrimary" 
            placeholder="CCV" 
            autoComplete="off" 
            type="text" 
            name="ccv" 
            onChange={handleInputChange}/>
            
            <input 
            className="iptPrimary radiusPrimary" 
            placeholder="Valid trough" 
            autoComplete="off" 
            type="text" 
            name="validDate" 
            onChange={handleInputChange}/>
            
            <input 
            className="ckbPrimary"  
            type="checkbox" 
            name="success" 
            onChange={handleInputChange} /> 

            <button 
              type="submit" 
              className="btnPrimary radiusPrimary big">
                Payment
            </button>
          </div>
          <div className="loginSuccess">
            
          </div>
        </form>        
        
      </div>
    </div>
  )
}
