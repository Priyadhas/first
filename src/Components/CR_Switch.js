import React, { useState } from 'react';

const Switch = () => {
  const [status, setStatus] = useState('guest');

  const handleLogin = () => setStatus('user');
  const handleAdminLogin = () => setStatus('admin');
  const handleLogout = () => setStatus('guest');

  let content;
  switch (status) {
    case 'user':
      content = <p>Welcome, user!</p>;
      break;
    case 'admin':
      content = <p>Welcome, admin!</p>;
      break;
    default:
      content = <p>Please log in.</p>;
  }

  return (
    <div>
        <h1>Example for switch case rendering</h1>
      {content}
      <button onClick={handleLogin}>Login as User</button>
      <button onClick={handleAdminLogin}>Login as Admin</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Switch;
