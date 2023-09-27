// CustomCursor.js

import React, { useEffect } from 'react';
import './customCursor.css';

const CustomCursor1 = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    const cursorInner = document.querySelector('.cursor2');
    const links = document.querySelectorAll('a');

    const handleMouseMove = (e) => {
      cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
      cursorInner.style.left = e.clientX + 'px';
      cursorInner.style.top = e.clientY + 'px';
    };

    const handleMouseDown = () => {
      cursor.classList.add('click');
      cursorInner.classList.add('cursorinnerhover');
    };

    const handleMouseUp = () => {
      cursor.classList.remove('click');
      cursorInner.classList.remove('cursorinnerhover');
    };

    links.forEach((item) => {
      item.addEventListener('mouseover', () => {
        cursor.classList.add('hover');
      });
      item.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
      });
    });

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <div >
      <div className="cursor"></div>
      <div className="cursor2"></div>
    </div>
  );
};

export default CustomCursor1;
