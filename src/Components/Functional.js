import React, { useState, useEffect } from 'react';

const FunctionalComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component did mount or update');
    return () => {
      console.log('Component will unmount');
    };
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default FunctionalComponent;
