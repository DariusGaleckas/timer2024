import React from 'react';
import { useTimer } from 'react-timer-hook';

export default function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


  return (
    <>
    <div className='timer'>
      <h1>3 Kambario TIMER </h1>
      <div style={{fontSize: '100px'}}>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <button className='btn btn-primary me-2' onClick={start}>Start</button>
      <button className='btn btn-primary me-2'onClick={pause}>Pause</button>
      <button className='btn btn-primary me-2' onClick={resume}>Resume</button>
      <button className='btn btn-primary' onClick={() => {
        // Restarts to 5 minutes timer
        const time = new Date();
        time.setSeconds(time.getSeconds() + 10);
        restart(time)
      }}>Restart</button>
    </div>

    {minutes === 0 && seconds === 0 && 
       <div className='Sveikiname'>
<h1>Valioooooo.... Pagaliau penktadienis</h1>
<iframe width="560" height="315" src="https://www.youtube.com/embed/h7idMIYZ-60?si=ARqezaDYPu8nMx6r&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>}
    </>
  );
}

