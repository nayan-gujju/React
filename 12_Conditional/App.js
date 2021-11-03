import React, { Component } from 'react'
import Guest from './Components/Guest';
import User from './Components/User'

export default class App extends Component {
    render() {
        const isRegistered = this.props.consumer;
        console.log("[][][][][][][][]", isRegistered);
        if (isRegistered){
            
            return <User/>;
        } else {
            return <Guest/>;
        }
    }
}
// IIFE use and this not required to call it's auto call {(() => {

//} )   () }