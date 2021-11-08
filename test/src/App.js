import React, { useState } from 'react'

export default function App() {

    const [name, setName] = useState("")
    const [pass, setPass] = useState("")
    const [repass, setRePass] = useState("")

    const handleChange = e => {
        if(e.tareget.name == "name"){
            console.log("=======name=========")
            setName(e.tareget.value)
        }
        else if (e.tareget.name == "password"){
            console.log("=======password=========")
            setPass(e.target.value);
        }
        else if (e.tareget.name == "repassword"){
            console.log("=======repassword=========")
            setRePass(e.target.value);
        }
    }
    // const handlePassChange = e => {
    // }
    // const handleRePassChange = e => {
    // }

    return (
        <div className="container-fluid my-2">
            <form>
                <label>
                    Name:- <input type="text" name="name" onChange={handleChange} value={name}/>
                </label>
                <br/><br/>
                <label>
                    Password:- <input type="password" name="password" value={pass} onChange={handleChange}/>
                </label>
                <br/><br/>
                <label>
                    Confirm Password:- <input type="password" name="repassword" value={repass} onChange={handleChange}/>
                </label>
                <br/><br/>
                <button type="button" className="btn btn-dark">Add</button>
                <br/><br/>
            </form>
        </div>
    )
}
