import React, { useEffect, useState } from 'react'
import './about.css'
import cloud from '../../Assets/cloud.png'


function About() {

  const [offsetY, setOffsetY] = useState(0)
 
  const handleScroll = () => {
      setOffsetY(window.scrollY)
  }
  useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      
      return () => window.removeEventListener('scroll', handleScroll);
  })

  const zoomFactor = 1 + offsetY * 0.0001

  

  return (
      <div className='aboutmain' style={{bottom:`${offsetY * 0.3}px`, backgroundSize: `${zoomFactor * 100}% auto`}} >
      
      <img src={cloud} alt="" className='cloud8'style={{bottom:`${offsetY * 0.5}px`}} />
      <img src={cloud} alt="" className='cloud9'style={{bottom:`${offsetY * 0.5}px`}} />
      
       <div className="texta" >
       <h1 className="about">ABOUT</h1>
       <div className="l"></div>
       
       <p className="para" >Greetings, I'm Abhishek,a pre-final year btech CSE student at NCERC,Thrissur. Currently residing in Palakkad, I excel as a freelance full-stack web developer, having secured victory in a national-level hackathon. My professional journey includes a two-month internship at UST Global, an esteemed MNC. Beyond academia, I contribute actively to IEEE as a dedicated volunteer and hold the position of Webmaster at PES Kerala Chapter. Additionally, I am a co-founder of Knowlumi, an innovative edtech startup. My commitment to excellence and passion for technology drive my pursuit of impactful projects and collaborations.</p>
      </div>
      
      
     <img src={cloud} alt="" className='cloud4' style={{left:`${offsetY * 0.3}px`}} />
     <img src={cloud} alt="" className='cloud5'style={{right:`${offsetY * 0.3}px`}} />

     <img src={cloud} alt="" className='cloud6' style={{top:`${offsetY * 0.6}px`}} />
     
    </div>
    
  )
}

export default About
