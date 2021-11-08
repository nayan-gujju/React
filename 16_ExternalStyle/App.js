import React, { Component } from 'react';
import Student from './Components/Student';
import './App.css';
export default class App extends Component {
    render() {
        let style = true;
        return (
            <>
                <p className='txtb bg' >Hello  React</p>
                <Student name={style ? 'txtb' : 'txtg'}/>
            </>
        )
    }
}
