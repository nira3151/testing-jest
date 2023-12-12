import React, { useState } from 'react'

const User = () => {
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
        setCounter((prevCounter) => prevCounter + 1);
    };

    const decrementCounter = () => {
        setCounter((prevCounter) => prevCounter - 1);
    };
    return (
        <>
            <div>
                <h2>Counter</h2>
                <button data-testid="increment" onClick={incrementCounter}>
                    +
                </button>
                <p data-testid="counter">{counter}</p>
                <button data-testid="decrement" onClick={decrementCounter}>
                    -
                </button>
            </div>
        </>
    )
}

export default User