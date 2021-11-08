import React, { Component } from 'react';

export default class Student extends Component {
    state = {
        change: false
    };

    handleClick = () => {
        this.setState({change: true})
    }

    render() {
        const btnStyle = {
            color: "red",
        };
    
        const btnColor = {  
            background: "yellow"    
        };

        if (this.state.change){
            btnStyle.color = "green";
        }

        return (
            <div>
                <h1>==========</h1>
                <button style={{ ...btnStyle, ...btnColor }}>Click</button> &nbsp;
                <button style={btnStyle} onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}
