import React, { useEffect } from 'react';
import './hover.css';

function Hover({ offsetY }) {
  useEffect(() => {
    const link = document.querySelectorAll('nav > .hover-this');
    const cursor = document.querySelector('.cursor');

    const animateit = function (e) {
      const span = this.querySelector('span');
      const { offsetX: x, offsetY: y } = e,
        { offsetWidth: width, offsetHeight: height } = this,
        move = 25,
        xMove = (x / width) * (move * 2) - move,
        yMove = (y / height) * (move * 2) - move;

      span.style.transform = `translate(${xMove}px, ${yMove}px)`;

      if (e.type === 'mouseleave') span.style.transform = '';
    };

    const editCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      cursor.style.left = x + 'px';
      cursor.style.top = y + 'px';
    };

    link.forEach((b) => b.addEventListener('mousemove', animateit));
    link.forEach((b) => b.addEventListener('mouseleave', animateit));
    window.addEventListener('mousemove', editCursor);

    // Cleanup event listeners when the component is unmounted
    return () => {
      link.forEach((b) => b.removeEventListener('mousemove', animateit));
      link.forEach((b) => b.removeEventListener('mouseleave', animateit));
      window.removeEventListener('mousemove', editCursor);
    };
  }, [offsetY]); // Include offsetY in the dependency array

  return (
      <div className="main">
    <div className="nav-wrapper" style={{ marginBottom: `${offsetY * 0.5}px` }}>
      <nav>
        <a href="#" className="hover-this">
          <span>I CREATE VISUALLY STUNNING AND POWERFULL WEBSITES AND GIVE AI POWERS TO THE WEBSITES</span>
        </a>
        
        <div className="cursor"></div>
      </nav>
    </div>
    </div>
  );
}

export default Hover;
