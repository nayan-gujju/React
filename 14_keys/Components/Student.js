import React, { Component } from 'react';

export default class Student extends Component {
    state = {
        users:[
            {id:101, name:"abc", password:"203dswds231dfs"},
            {id:102, name:"bdc", password:"203dswdsdfs"},
            {id:103, name:"efd", password:"dswds231dfs"}
        ],
        isLogined: true
    }
    
    render() {
        const newUser = this.state.users.map((user) => {
            console.log(user)
            return (<h1 key={user.id}>ID.:- {user.id} Name.:- {user.name} Password.:-{user.password}</h1>)    
        })
        console.log("=====+++++++++=========", newUser)
        return (
            <div>
                {/* <p>{newUser}</p> */}
            </div>
        )   
    }
}
