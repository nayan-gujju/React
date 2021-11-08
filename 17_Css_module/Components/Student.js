import React, { Component } from 'react'
import styles from './Student.module.css';
export default class Student extends Component {
    render() {
        return (
            <div>
                <p className={styles.txt}>Student</p>
            </div>
        )
    }
}
