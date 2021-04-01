import React, { useState } from 'react';

ColorBox.propTypes = {

};

function getRandomColor(){
  const COLOR_LIST = ['deeppink', 'green', 'red', 'yellow', 'white', 'blue'];
  const randomIndex = Math.floor(Math.random() * COLOR_LIST.length);
  return COLOR_LIST[randomIndex];
}

function ColorBox(props) {

  const [color, setColor] = useState(()=>{
    const initColor = localStorage.getItem('box_color')|| 'deeppink';
    console.log(initColor);
    return initColor;
  });
  function handleBoxClick(e) {
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem('box_color', newColor);
  }
  return (
    <div className="color-box" style={{backgroundColor: color}} onClick={handleBoxClick}>
      ...
    </div>
  );
}

export default ColorBox;