import React, { useState } from 'react';
import ConditionalRenderingif from './CR_if';
import Ternary from './CR_Ternary';
import Logical from './CR_Logical&&';
import Switch from './CR_Switch.js';


const ConditionalRendering = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div>
        <h1>InLineConditionalRendering</h1>
      {isLoggedIn ? (
        <div>
          <p>Welcome, user!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please log in.</p>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
      <ConditionalRenderingif/>
      <Ternary/>
      <Logical/>
      <Switch/>
    </div>
    
  );
};

export default ConditionalRendering;
