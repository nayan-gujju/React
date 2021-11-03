// import React from 'react';

// export default function Student(props) {

//     const b = props.number
    
//     // const a = l.map((num) =>{
//     //     return <li>{num}</li>
//     // })

//     return (
//         <div>
//             <h2>Students Roll No...</h2>
//             <ul>
//                 {b.map( (num) => <li>{num}</li>)} 
//             </ul>
//         </div>
//     )
// }

import React, { Component } from 'react'

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
            return <p>ID.:- {user.id} Name.:- {user.name} Password.:-{user.password}</p>
        })
        console.log("====================", newUser)
        return (
            <div>
                {/* <p>Id.:-{this.state.users[0].id} Name.:-{this.state.users[0].name} Password.:-{this.state.users[0].password}</p>
                <p>Id.:-{this.state.users[1].id} Name.:-{this.state.users[1].name} Password.:-{this.state.users[1].password}</p>
                <p>Id.:-{this.state.users[2].id} Name.:-{this.state.users[2].name} Password.:-{this.state.users[2].password}</p> */}
                <p>{newUser}</p>
            </div>
        )
    }
}
