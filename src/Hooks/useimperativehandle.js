import React, { useRef, useImperativeHandle, forwardRef } from 'react';

// Custom input component
const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    clear: () => {
      inputRef.current.value = '';
    }
  }));

  return <input ref={inputRef} {...props} />;
});

// Parent component
function Hook12() {
  const inputRef = useRef();

  return (
    <div>
      <CustomInput ref={inputRef} placeholder="Type something..." />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
      <button onClick={() => inputRef.current.clear()}>Clear Input</button>
    </div>
  );
}

export default Hook12;
