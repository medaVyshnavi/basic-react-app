import React from 'react'
import fb from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import instagram from '../images/icon-instagram.svg'

const Contact = () => {
  return (
    <div className="section about-section">
      <h1 className="section-title">Contact</h1>
      <div className="contact">
        <img src={instagram} alt="" className="social"/>
        <img src={twitter} alt="" className="social"/>
        <img src={fb} alt="" className="social"/>
     </div>
    </div>
  )
}

export default Contact
