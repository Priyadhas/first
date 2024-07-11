
// Parent.js
import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
  const [message, setMessage] = useState('');

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div>
      <h1>Message from Child: {message}</h1>
      <Child sendMessageToParent={handleMessage} />
    </div>
  );
};

export default Parent;
