import React, { useState } from 'react'
import './style.css';
const Counter = () => {
    // on creer a l'aide du hook useState count // on initialise count a 0
    const [count, setCount] = useState(0);

    return (
      <div className="counter-container">
        {/* on affiche le count a chasue fois il change  */}
        <p>Count: {count}</p>
        {/* le button d'incrementation */}
        <button className='counter-button increment-button' onClick={() => setCount(count + 1)}>Increment</button>
        {/* le button de decrementation */}
        <button className="counter-button decrement-button" onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    );
}

export default Counter
