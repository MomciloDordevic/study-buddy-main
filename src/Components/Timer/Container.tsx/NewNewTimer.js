import React, { useState, useEffect } from 'react';
import classes from './NewNewTimer.module.css'

const NewNewTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className={classes.app}>
      <div className={classes.time}>
        {seconds}s
      </div>
      <div className="row">
        <button className={classes.button} onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button className={classes.button} onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default NewNewTimer;