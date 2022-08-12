
import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import Clock from "./components/Clock";
const dayjs = require('dayjs')
var weekOfYear = require('dayjs/plugin/weekOfYear')
dayjs.extend(weekOfYear)
var duration = require('dayjs/plugin/duration')
dayjs.extend(duration)
// dayjs.extend(dayOfYear)
//import dayjs from 'dayjs' // ES 2015


function App() {
  const [timerMonths, setTimerMonths] = useState();
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("Dec 08,2021 ").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = now - countDownDate;
      const months = Math.floor(distance / (30 * 24 * 60 ))
      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // Stop Timer

        clearInterval(interval.current);
      } else {
        // Update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };
  
  
  
  useEffect(() => {
    startTimer();
  });

  return (
    <div className="App">
      <Clock
        timerDays={timerDays}
        timerHours={timerHours}
        timerMinutes={timerMinutes}
        timerSeconds={timerSeconds}
      />
      
    </div>
  );
}

export default App;
