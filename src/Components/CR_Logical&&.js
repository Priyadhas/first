import React, { useState } from 'react';

const Logical = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div>
      <h1>Conditional Rendering using Logical &&</h1>
      {isLoggedIn && <p>Welcome, user!</p>}
      {!isLoggedIn && <p>Please log in.</p>}
      <button onClick={isLoggedIn ? handleLogout : handleLogin}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};

export default Logical;
