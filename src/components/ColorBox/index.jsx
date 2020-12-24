import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ColorBox.scss';

ColorBox.propTypes = {
  
};

function getRandomColor() {
  const colorList = ['green', 'pink', 'yellow', 'black', 'blue'];
  const randomIndex = Math.trunc(Math.random() * 5);
  return colorList[randomIndex];
}

function ColorBox() {
  
  const [color, setColor] = useState( () => {
    const initColor = localStorage.getItem('box-color') || 'red';
    console.log(initColor);
    return initColor;
  });

  function handleBoxClick() {
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem('box-color', newColor);
    
  }

  return (
    <div className="color-box" 
    style={{ backgroundColor: color}}
    onClick= {handleBoxClick}
    >
      Color box
    </div>
  );
}

export default ColorBox;