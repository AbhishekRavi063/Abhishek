import React, { useEffect, useState } from 'react'
import './skills.css'
import cloud from '../../Assets/cloud.png'
import html from '../../Assets/html5-logo-31813.png'
import css from '../../Assets/CSS.png'
import next from '../../Assets/nextjs-icon.png'
import js from '../../Assets/js.png'
import python from '../../Assets/python.png'
import flask from '../../Assets/flask.png'
import node from '../../Assets/node.png'
import github from '../../Assets/github-logo.png'
import express from  '../../Assets/express.png'
import figma from '../../Assets/figma-logo.png'
import firebase from '../../Assets/firebae.png'
import mongo from '../../Assets/mongo.png'
import git from '../../Assets/Git-Icon-1788C.png'
import react from '../../Assets/reactt.png'
import npm from '../../Assets/npm.png'
import tf from  '../../Assets/tf.png'


function Skills() {

  const [offsetY, setOffsetY] = useState(0)
 
  const handleScroll = () => {
      setOffsetY(window.scrollY)
  }
  useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      
      return () => window.removeEventListener('scroll', handleScroll);
  })
  const isMobile = window.innerWidth <= 768;

  const zoomFactor = isMobile ? 1 : 1 + offsetY * 0.0005

  const bottomValue = isMobile ? 'auto' : `${offsetY * 0.3}px`;

  return (
      <div className='skillsmain' style={{bottom:bottomValue, backgroundSize: `${zoomFactor * 100}% auto`}} >
      
      <img src={cloud} alt="" className='cloud8'style={{left:`${offsetY * 0.5}px`}} />
      <img src={cloud} alt="" className='cloud10'style={{right:`${offsetY * 0.5}px`}} />
      
       <div className="texta" >
        <div className="sd">
       <h1 className="skillt">SKILLS</h1>
       <div className="sl"></div>
       </div>
       <div className="skills">
       <div className="r1">  
       
       <img src={html} alt="" className="logo" />
       <img src={css} alt="" className="logo" />
       <img src={next} alt="" className="logon" />
       <img src={js} alt="" className="logo" />
      
       </div>

       <div className="r2">

       <img src={python} alt="" className="logo" />
       <img src={flask} alt="" className="logo" />
       <img src={node} alt="" className="logo" />
       <img src={github} alt="" className="logo" />

       </div>
       
       <div className="r3">

       <img src={express} alt="" className="logo" />
       <img src={figma} alt="" className="logo" />
       <img src={firebase} alt="" className="logo" />
       <img src={mongo} alt="" className="logo" />

       </div>

       <div className="r4">

        <img src={git} alt="" className="logo" />
        <img src={npm} alt="" className="logo" />
        <img src={react} alt="" className="logo" />
        <img src={tf} alt="" className="logo" />

       </div>
       </div>
      </div>
      
      
     <img src={cloud} alt="" className='cloud4' style={{left:`${offsetY * 0.3}px`}} />
     <img src={cloud} alt='' className='cloud10' style={{left:`${offsetY * 0.3}px`}} />

     
     
    </div>
    
  )
}

export default Skills
