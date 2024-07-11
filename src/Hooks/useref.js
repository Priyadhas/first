import React, { useRef } from 'react';

function Hook4() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
        <h1>useRef</h1>
      <input ref={inputRef} type="text" placeholder="Type something..." />
      <button onClick={focusInput}>Focus the input</button>
    </div>
  );
}

export default Hook4;
