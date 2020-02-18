// your Bomb code here!
import React from 'react';
class Bomb extends React.Component {

    constructor(props) {
        super ();
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render () {
        return (   
            <h1>{this.state.secondsLeft != 0 ? `${this.state.secondsLeft} seconds left before I go boom!` : `Boom!`}</h1>  
        )
    }
}

export default Bomb;