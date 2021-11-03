import React from 'react';
import useCustomCounter from './Components/Custom';

export default function App() {

    const data = useCustomCounter();
    return (
        <div>
            <h1>Count:-{data.count}</h1>
            <button onClick={data.handleCount}>Increment</button>
        </div>
    )
}
