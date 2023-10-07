import React from 'react'
import './login.css';

import { Link } from 'react-router-dom';
const signup = () => {
  return (
    <form className='log'>
      <div><br/>
        <h1>Registration Form</h1>
      </div><br/>
      <div >
        <label> FullName</label>
        <input type='text' placeholder='name' required/>
      </div><br/>
      <div>
        <label> UserName</label>
        <input type='text' placeholder='username' required/>
      </div><br/>
      <div  >
        <label> Email</label>
        <input type='Email' placeholder='email@gmail.com' required/>
      </div><br/>
      <div >
          <label>phone no </label>
          <input type="tel" placeholder='1234567890' name="phone" pattern="[0-9]{10}" required/><br/> <br/>         </div>
          
      <div  >
        <label>Password</label>
        <input type='Password' name='password' placeholder='password' required/>
      </div><br/>
      <div >
        <label>confirm Password</label>
        <input type='password' placeholder='password' required/>
      </div><br/>
      <div>
        <button> 
          <Link to='/login' className='loginbtn'>Submit</Link>
        </button>
      </div>
      
      <br/>
     
    </form>
    
  )
}

export default signup;