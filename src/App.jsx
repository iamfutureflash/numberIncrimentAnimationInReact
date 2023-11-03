import { useEffect, useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  const [count, setCount] = useState(100);
  useEffect(() => {
    let currentNumber = 0;
    const targetedNumber = 100;
    const duration = 200;
    const step = targetedNumber / duration;

    console.log(currentNumber, targetedNumber, duration, step);

    const interval = setInterval(() => {
      if (currentNumber < targetedNumber) {
        currentNumber += step;
        setCount(Math.ceil(currentNumber));
        console.log();
      } else {
        setCount(targetedNumber);
        clearInterval(interval);
        console.log();
      }
    }, 0);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="number-increment-animation">
        <div className="number">{count}</div>
      </div>
    </>
  );
}

export default App;
