import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <div className='navmain'>

     <h1 className="logo">ABHISHEK</h1> 
     
     <div className="nav">
        <ul className='list'>
            <li className='item'>ABOUT</li>
            <li className='item'>SKILLS</li>
            <li className='item'>WORKS</li>
            <li className='item'>CONTACT</li>
        </ul>
     </div>

    </div>
  )
}

export default Navbar
