import React, { useState, useEffect, useDebugValue } from 'react';

// Custom Hook
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    // Simulate subscribing to a friend's status
    const timeoutId = setTimeout(() => handleStatusChange({ isOnline: true }), 1000);

    // Cleanup function
    return () => {
      clearTimeout(timeoutId);
    };
  }, [friendID]);

  // Add a debug label
  useDebugValue(isOnline ? 'Online' : 'Offline');

  return isOnline;
}

// Component using the custom hook
function Hook11({ friendID }) {
  const isOnline = useFriendStatus(friendID);

  if (isOnline === null) {
    return 'Loading...';
  }

  return isOnline ? 'Online' : 'Offline';
}

export default Hook11;
