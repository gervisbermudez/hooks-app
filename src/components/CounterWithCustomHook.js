import React, { useState } from 'react';
import { useCounter } from '../hooks/useCounter';


export const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter(0);

    return (
        <div className="container">
            <h1>Counter with hook:</h1>
            <p>
                <br />
                {state}
            </p>
            <button onClick={() => { increment(1) }} className="btn btn-primary">+ 1</button>
            <button onClick={() => { reset(1) }} className="btn">Reset</button>
            <button onClick={() => { decrement(2) }} className="btn btn-danger">- 1</button>
        </div>
    )
}
