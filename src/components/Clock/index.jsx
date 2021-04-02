import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

Clock.propTypes = {

};
function formatDate(){
  const date = new Date();

  const hours  = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);

  return `${hours}:${minutes}:${seconds}`;

}
function Clock() {
  const [timeString, setTimeString]= useState('');

  useEffect(()=>{
    const intervalClock = setInterval(()=>{
      const now = new Date();
      const newTimeString = formatDate(now);
      setTimeString(newTimeString);
    },1000);
    return ()=>{
      console.log('cleanup')
      clearInterval(intervalClock);
    }
  },[])
  return (
    <p style={{fontSize:'42px'}}>{timeString}</p>
  );
}

export default Clock;