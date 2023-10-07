import React from 'react'
import './Payment.css'
import qrcode from './qrcode.jpg'
const Payment = () => {
  return (
    <div className='code'>
      <form className='pay' >
          <div>
          <h2 className='hello'>PAYMENT</h2><br/>
          <div >
            <label  className='Plabel'>FullName:</label>
            <input type='text' placeholder='name' required/><br/><br/>
          </div>
          <div>
            <label  className='Plabel'>Fulladdress :</label>
            <input type='text' placeholder='H-no city' required/><br/><br/>
          </div>
          <div >
            <label  className='Plabel'>phone no :</label>
            <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required/><br/> <br/>         </div>
          <div >
            <label  className='Plabel'>trees type:</label>
            <select className='Poption'>
              <option>Mango trees</option>
              <option>Neem trees</option>
              <option> Arjuna tree</option>
              <option>Banyan trees</option>
              <option>peepal trees</option>
            </select><br/><br/>
          </div>
          <div >
            <label  className='Plabel'>no of trees :</label>
            <input type='number' placeholder='range of trees' maxLength={1000000} required/><br/><br/>
          </div>
          <button className='payment'>Submit</button><br/><br/>
        </div>
      </form>
      <form>
        <div className='qr'>
           <h4 className='head'> QR code</h4>
           <img alt="scanner" className='scan'src={qrcode}/>
        </div>
      </form>
    </div>   

    
  )
}

export default Payment