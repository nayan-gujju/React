import React, {useState} from 'react';

export default function App() {
  const [name, setName] = useState("App");
  const [roll, setRoll] = useState(101);
  const handleClick = () => {
    console.log("Button Clicked...");
    setName("Student");
    setRoll(170220107019);
  }

  return (
    <div>
      <h1>Name :-{name}</h1>
      <h1>Roll No :-{roll}</h1>
      <button onClick={handleClick}>Click</button>
      
    </div>
  )
}
