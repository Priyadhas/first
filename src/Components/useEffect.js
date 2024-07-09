import React, { useState, useEffect } from 'react';

const Counting = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This code runs after every render (when the component mounts and updates)
    console.log(`You clicked ${count} times`);

    // Cleanup function (optional)
    return () => {
      console.log('Cleanup before next useEffect or component unmount');
    };
  }, [count]); // Dependency array, []- Empty dependency array, 

  return (
    <div>
      <h1>Example of UseEffect</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counting;
