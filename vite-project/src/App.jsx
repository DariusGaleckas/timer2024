import { useEffect, useState } from 'react'
import './App.css'
import MyTimer from './components/timer';

function App() {
useEffect(()=> {
  let count = 150;
  for (let i = 0; i < count; i++) {
    let star = document.createElement("div");
    let size = 10 + Math.random() * 20;
    star.classList.add("star");
    star.style.fontSize = `${size}px`;
    star.style.top = `${Math.random() * +innerHeight}px`;
    star.style.left = `${Math.random() * +innerWidth}px`;
    star.style.filter = `hue-rotate(${i * 5}deg)`;
    document.querySelector(".wrapper").appendChild(star);
  }
  
  function Blink() {
    let stars = document.querySelectorAll(".star");
    let index = Math.floor(Math.random() * stars.length);
    stars[index].classList.toggle("blink");
  }
  
  setInterval(Blink, 200);
  
},[])


  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
  return (
    <div className='wrapper'>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}

export default App
