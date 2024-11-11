import React, { useState } from 'react';
import './CardStyles.css';

function CounterCard({ theme }) {
  const [count, setCount] = useState(0);

  return (
    <div className={`card ${theme}`}>
      <h4>Counter</h4>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default CounterCard;
