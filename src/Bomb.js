// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends React.Component {
  

  constructor(props) { //props that the component gets from its parent
    super();
    this.state = { //define initial state with a key of 'someKey' set to the 'someValue' prop
      secondsLeft: props.initialCount
    };
  }

  render() {
    if(this.state.secondsLeft > 0) {

      return `${this.props.initialCount} seconds left before I go boom!`;
    
    } else {

      return `Boom!`;

    }
  }
}


// export default Bomb;