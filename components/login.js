import React from 'react'
import "./login.css"
import './signup.js'
import './Payment.js'
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <form className='log'>
     <div>
      <div><br/>
        <h5 className='Lhead'>LOG IN </h5>
      </div><br/>
      <div>
       <label>UserName :</label>
       <input type='text' placeholder='name' required/> 
      </div><br/>
      <div>
        <label>Password :</label> 
        <input type='password' name='password' placeholder='password' required />
      </div><br/>
      
        <button><Link to='/Payment'className='loginbtn'>login</Link></button>
      <br/>
      </div>
      <div>
        <h5>forget password</h5>
        <h5>don't have Account &nbsp;&nbsp;<button className='button2'> <Link to="/signup" className='sign'>SIGNUP</Link></button></h5>
      </div><br/>
    </form>
  )
}

export default Login