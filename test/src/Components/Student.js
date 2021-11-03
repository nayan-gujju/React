import React from 'react'
// import Popup from "reactjs-popup";

export default function Student() {

    const handleClick = () => {
        alert("+-/+-*-*/+-/-*/-*+*//*-/*-");
    }

    const btnStyle = {
        color: "red",
    }

    const btnColor = {  
        background: "yellow"
    }

    return (

        <div>
            <h1>-=</h1>
            <button style={{...btnStyle, ...btnColor} } onClick={handleClick} >Click</button>                           
        </div>                   
    )
}
