import React, { useEffect } from 'react';
import './customCursor.css';

const CustomCursor1 = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    const cursorInner = document.querySelector('.cursor2');
    const links = document.querySelectorAll('a');
    const twElements = document.querySelectorAll('.nav-link-effect');
    const ParallaxCard = document.querySelectorAll('.overlap-2');
    
    const stateTitles = document.querySelectorAll('.state-title');

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

    // Add event listeners for elements with class .tw
    twElements.forEach((element) => {
      element.addEventListener('mouseover', () => {
        cursor.classList.add('tw-hover');
        cursorInner.classList.add('tw-hover-inner');
      });
      element.addEventListener('mouseleave', () => {
        cursor.classList.remove('tw-hover');
        cursorInner.classList.remove('tw-hover-inner');
      });
    });

    stateTitles.forEach((element) => {
      element.addEventListener('mouseover', () => {
        cursor.classList.add('st-tw-hover');
        cursorInner.classList.add('st-tw-hover-inner');
      });
      element.addEventListener('mouseleave', () => {
        cursor.classList.remove('st-tw-hover');
        cursorInner.classList.remove('st-tw-hover-inner');
      });
    });

    ParallaxCard.forEach((element) => {
      element.addEventListener('mouseover', () => {
        cursor.classList.add('pc-hover');
        cursorInner.classList.add('pc-hover-inner');
      });
      element.addEventListener('mouseleave', () => {
        cursor.classList.remove('pc-hover');
        cursorInner.classList.remove('pc-hover-inner');
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
    <div
    style={{
      transition: "all 1 ease-in-out",
    }}
    >
      <div className="cursor"></div>
      <div className="cursor2"></div>
    </div>
  );
};

export default CustomCursor1;
