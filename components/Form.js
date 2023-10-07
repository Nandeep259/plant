import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import './Form.css';

const Form = () => {
  const [fullname, setfullname] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [date, setdate] = useState('');
  const [area, setarea] = useState(''); // Add state for 'area'

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submission logic here
    // You can send the form data to an API or perform any other actions

    // Clear form fields after submission
    setfullname('');
    setemail('');
    setphone('');
    setdate('');
    setarea(''); // Clear the 'area' field as well
  };
  const handleClick = (e) => {
    e.preventDefault();
    const Booking= { fullname, email, phone,date ,area };
    console.log(Booking);
    fetch("http://localhost:8900/1/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Booking),
    }).then(() => {
      console.log("Booking");
    });
  };

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   const info = {
  //     fullname,
  //     email,
  //     phoneno,
  //     date,
  //     area, // Include 'area' in the booking data
  //   };
  //   console.log(info);
  //   // Perform your fetch or API call here
  // };

  return (
    <center>
      <div className='Back'>
        <div className='code'>
          <br></br>
          <div className='Vcard'>
            <div>
              <h2 className='me'>VOLUNTEER FORM</h2><br/>
            </div>
            <form className='kav' onSubmit={handleSubmit}>
              <br></br>
              <div>
                <label htmlFor="fullname">fullname:</label>
                <input type="text" id="fullname" name="fullname" value={fullname} onChange={(e) => setfullname(e.target.value)} required />
              </div>
              <br></br>
              <div>
                <label htmlFor="email">email:</label>
                <input type="email" id="email" name="email" value={email} onChange={(e) => setemail(e.target.value)} required />
              </div>
              <br></br>
              <div>
                <label htmlFor="phone">phone:</label>
                <input type="text" id="phone" name="phone" value={phone} onChange={(e) => setphone(e.target.value)} required />
              </div>
              <br></br>
              <div>
                <label htmlFor="date">date:</label>
                <input type="date" id="date" name="date" value={date} onChange={(e) => setdate(e.target.value)} required />
              </div>
              <br></br>
              <div>
                <label htmlFor="area">area:</label>
                <input type="text" id="area" name="area" value={area} onChange={(e) => setarea(e.target.value)} required />
              </div>
              <br></br>
              <div>
                <p >
                  <center><button type="Submit" onClick={handleClick}className='Vbutton'><Link to="Submit">
                  Submit</Link></button></center>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </center>
  );
  };

export default Form;
