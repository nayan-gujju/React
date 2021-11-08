import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return (
            <div>
                <p>app</p>
                <a href="https://www.google.com">
                     <img src={process.env.PUBLIC_URL + "/logo192.png"} alt="----" width="100px" height="100px" />
                </a>
            </div>
        )
    }
}
