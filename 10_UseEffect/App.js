import React, {useState, useEffect} from 'react'

export default function App() {

    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(50);

    const handleInClick = () => {
        console.log("Increment Button Clicked......");
        setCount(count+1);
    }
    
    const handleDeClick = () => {
        console.log("Decrement Button Clicked......");
        setCount1(count1-1);
    }

    useEffect( () => {
        console.log("Use Effect........");
    }, [count1]);

    return (
        <div>
            <h1>Count:-{count}</h1>
            <button onClick={handleInClick} >Increment</button>
            <h1>Down:-{count1}</h1>
            <button onClick={handleDeClick} >Decrement</button>
        </div>
    )
}
