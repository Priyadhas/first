import React, { useId } from 'react';

function Hook13() {
  // Generate unique IDs
  const nameId = useId();
  const emailId = useId();

  return (
    <form>
      <div>
        <label htmlFor={nameId}>Name:</label>
        <input id={nameId} type="text" name="name" />
      </div>
      <div>
        <label htmlFor={emailId}>Email:</label>
        <input id={emailId} type="email" name="email" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Hook13;
