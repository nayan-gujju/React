import React, { Component } from 'react'
import Student from './Components/Student'

export default class App extends Component {
    render() {
        const arr = [10,20,30,40]
        return (
            <div>
                <Student number = {arr}/>
            </div>
        )
    }
}
