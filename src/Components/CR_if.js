import React, { useState } from 'react';

const ConditionalRenderingif = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  let content;
  if (isLoggedIn) {
    content = <p>Welcome, user!</p>;
  } else {
    content = <p>Please log in.</p>;
  }

  return (
    <div>
      <h1>Conditional Rendering using if</h1>
      {content}
      <button onClick={isLoggedIn ? handleLogout : handleLogin}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};

export default ConditionalRenderingif;
