import React, { Component } from 'react'
import Student from './Components/Student'
import styles from './App.module.css';
import Styles1 from './Components/Student.module.css';
export default class App extends Component {
    render() {
        return (
            <div>
                <Student/>
                <p className={styles.txt}>App1</p>
                <p className={Styles1.txt}>App2</p>
            </div>
        )
    }
}
