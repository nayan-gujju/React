import React, {useState} from 'react'

export default function Student() {
    const [value, setValue] = useState("");
    const handleChange = (e) => {
        setValue(e.target.value.toUpperCase().substr(0,20));
    }
    return (
        <div>
            <p>student component</p>
            <form>
                <h2>Controlled by React</h2>
                <input type="text" value={value} onChange={handleChange} />
            </form>
            <div className="my-2">
                <button type="button" className="btn btn-dark">Clear</button>
            </div>
        </div>
    )
}
