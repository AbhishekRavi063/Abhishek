import React, { useRef, useState } from 'react';
import './works.css';
import netflix from '../../Assets/Netflix.png'
import fitclub from '../../Assets/Fitclub.png'
import domus from '../../Assets/domus.png'
import plante from '../../Assets/Plante.png'
import Contact from '../contact/Contact';

function Works() {
  const rpostRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - rpostRef.current.offsetLeft);
    setScrollLeft(rpostRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - rpostRef.current.offsetLeft;
    const walk = (x - startX) * 2; // You can adjust the multiplier for faster or slower scrolling
    rpostRef.current.scrollLeft = scrollLeft - walk;
  };

  // Example data object with image URLs and text
  const cardData = [
    { imageUrl: netflix, text: 'NETFLIX UI CLONE' },
    { imageUrl: fitclub, text: 'FITCLUB' },
    { imageUrl: domus, text: 'DOMUS' },
    { imageUrl: plante, text: 'PLANT-E' },
    // Add more card data as needed
  ];

  return (
    <div className='worksmain'>
      <h1 className="workh">WORKS</h1>
      <div className="lw"></div>

      <div
        className="rpost"
        ref={rpostRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {/* Render cards dynamically based on the data object */}
        {cardData.map((card, index) => (
          <div key={index} className="card">
            <img src={card.imageUrl} alt={`Card ${index}`} />
            <div className="cardContent">
              <p className='ctext'>{card.text}</p>
              <div className="buttonContainer">
                <button className="button">CODE</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Contact/>
    </div>
  );
}

export default Works;

