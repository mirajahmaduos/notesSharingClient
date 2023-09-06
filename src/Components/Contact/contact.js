import React from 'react'
import Navbar from '../Navbar/navbar'
import './contact.css';

export default function Contact() {
  return (
    <>
      <Navbar />

      <div className='contact'>
        <div className='contact-container'>
            <div className='contact-image'>
              <img src={require('../images/contact.jpg')} alt="about" className="about-photo" />
            </div>

            <div className='contact-content'>
              <h2 className='contact-heading'>Contact Us</h2>
              <form className='form'>

                <div className='input-grp'>
                  <input type='text' placeholder='Full Name' className='input-fld'></input>
                </div>

                <div className='input-grp'>
                <input type='email' placeholder='Enter Email' className='input-fld'></input>
                </div>

                <div className='input-grp'>
                <input type='text' placeholder='Subject' className='input-fld'></input>
                </div>

                <div className='input-grp'>
                <textarea name="description" placeholder='Enter Your Message' className='input-fld textarea'></textarea>
                </div>

                <button type="submit" className="contact-form-btn" value="send">Send</button>

              </form>
            </div>
        </div>
      </div>
    </>
  )
}
