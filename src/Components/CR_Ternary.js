import React, { useState } from 'react';

const Ternary = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div>
      <h1>Conditional Rendering using Ternary</h1>
      {isLoggedIn ? <p>Welcome, user!</p> : <p>Please log in.</p>}
      <button onClick={isLoggedIn ? handleLogout : handleLogin}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};

export default Ternary;
