import React from 'react'
import './contact.css'
import whatsapp from '../../Assets/WHATSAPP.png'
import insta from '../../Assets/INSTA.png'
import linkdln from '../../Assets/LINKDLN.png'

function Contact() {
  return (
    <div className='contactmain'>
     
     <h1 className="contactt">CONTACT ME</h1>

     <div className="socials">
     <h2 className="mail">abhishekravi063@gmail.com</h2>
    
    <div className="line"></div>
  
   <a href=" https://wa.me/qr/6B43DMOLEI6RN1 "> <img src={whatsapp} alt="" className="social" /></a>
    <a href="https://instagram.com/abhi___200?igshid=ODE3MXh1aXA1czdw"><img src={insta} alt="" className="social" /></a>
    <a href="https://www.linkedin.com/in/abhishek-r-2bab72278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src={linkdln} alt="" className="social" /></a>

    </div>
    </div>
  )
}

export default Contact
