import React, { useEffect, useState } from "react";

function Timer() {
    const [time, setTime] =useState(0);
  
    useEffect(() => {
      const timerId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
  
      return () => {
        clearInterval(timerId);
      };
    }, []); // Empty dependency array to run effect only once
  
    return (
      <div>
        <p>Time: {time} seconds</p>
      </div>
    );
  }
  
  export default Timer;