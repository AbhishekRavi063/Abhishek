import React, { useEffect, useState } from 'react'
import './hero.css'
import Navbar from '../navbar/Navbar'
import cloud from '../../Assets/cloud.png'

function Hero() {

    const [offsetY, setOffsetY] = useState(0)
 
    const handleScroll = () => {
        setOffsetY(window.scrollY)
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        
        return () => window.removeEventListener('scroll', handleScroll);
    })

    const zoomFactor = 1 + offsetY * 0.0005

    const downloadPDF = () => {
      const link = document.createElement('a');
      link.href = '../../Assets/Resume.pdf'
      link.download = 'Resume.pdf'; // The default downloaded file name
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

  return (
    <div className='heromain' style={{backgroundSize: `${zoomFactor * 100}% auto`, bottom: `${offsetY * 0.3}px`}}>
      <Navbar/>
       
       <div className="text" >
      <h2 className="hi">HI, I AM</h2>
      <h1 className="name">ABHISHEK.R</h1>
      <h1 className="stack">FULL STACK WEB DEVELOPER</h1>
      <button className='cv' onClick={downloadPDF}>RESUME</button>
      </div>

      <img src={cloud} alt=""  className='cloud1' style={{bottom:`${offsetY * 0.3}px`}}/>
      <img src={cloud} alt=""  className='cloud2' style={{bottom:`${offsetY * 0.3}px`}}/>
      
      <img src={cloud} alt=""  className='cloud10' />
     
    </div>
  )
}

export default Hero
