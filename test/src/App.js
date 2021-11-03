import React from 'react';

const Tile = (props) => {
    return (
        <div className="Tile">
            <h3>{props.title}</h3>
            <button onClick={props.click}>
                {props.value}
            </button>
        </div>
    );
}


class App extends React.Component {
    
    generateAlert = () => {
        alert("Hi");
    }
    
    render() {
        return (
            <Tile
                click={this.generateAlert}
                title={"This is a Title"}
                value={"This is the value"} />
        );
    }
}

export default App;