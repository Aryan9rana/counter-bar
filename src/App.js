import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [num, setNum] = useState(145);
  const [history, setHistory] = useState([]);
  const [future, setFuture] = useState([]);

  const handleIncrement = () => {
    if (num < 150) {
      const newNum = num + 1;
      setHistory([...history, num]);
      setFuture([]);
      setNum(newNum);
    }
  };

  const handleDecrement = () => {
    if (num > 0) {
      const newNum = num - 1;
      setHistory([...history, num]);
      setFuture([]);
      setNum(newNum);
    }
  };

  const handleUndo = () => {
    if (history.length > 0) {
      const previous = history.pop();
      setFuture([num, ...future]);
      setNum(previous);
      setHistory([...history]);
    }
  };

  const handleRedo = () => {
    if (future.length > 0) {
      const next = future.shift();
      setHistory([...history, num]);
      setNum(next);
      setFuture([...future]);
    }
  };

  const progressBarWidth = `${(num / 150) * 100}%`;

  return (
    <div className="App">
      <h1>Counter </h1>
      <h1>Number: {num}</h1>
      <div className="button-container">
        <button onClick={handleDecrement}>Subtract 1</button>
        <button onClick={handleIncrement}>Add 1</button>
      </div>
      <div className="progress-bar-background">
        <div className="progress-bar" style={{ width: progressBarWidth }}></div>
      </div>
      <div className="button-container">
        <button onClick={handleUndo} disabled={history.length === 0}>Undo</button>
        <button onClick={handleRedo} disabled={future.length === 0}>Redo</button>
      </div>
      <h3>Made by Aryan</h3>
    </div>
  );
};

export default App;
