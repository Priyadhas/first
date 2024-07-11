import React, { useState, useLayoutEffect, useRef } from 'react';

function Hook10() {
  const [count, setCount] = useState(0);
  const divRef = useRef();

  useLayoutEffect(() => {
    console.log('useLayoutEffect');
    console.log('divRef current width:', divRef.current.offsetWidth);
    if (divRef.current.offsetWidth > 300) {
      alert('Div is too wide!');
    }
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <div ref={divRef} style={{ width: `${100 + count * 10}px`, border: '1px solid black' }}>
        Width: {100 + count * 10}px
      </div>
    </div>
  );
}

export default Hook10;
