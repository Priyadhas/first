import React, { useState, useMemo } from 'react';

function Hook5() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // Expensive calculation function
  const expensiveCalculation = (num) => {
    console.log('Calculating...');
    for (let i = 0; i < 1000000000; i++) {} // Simulate a heavy computation
    return num * 2;
  };

  // Memoized value
  const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <h1>useMemo Example</h1>
      <div>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
        <p>Count: {count}</p>
        <p>Double Count (Memoized): {memoizedValue}</p>
      </div>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
        />
        <p>Text: {text}</p>
      </div>
    </div>
  );
}

export default Hook5;
