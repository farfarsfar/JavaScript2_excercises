import React, { Component } from 'react';

class Mounted extends Component {
  
   componentWillMount() {
    console.log("<Mounted /> WillMount")
  }

  componentDidMount() {
    console.log("<Mounted /> DidMount")
  }

  componentWillUnmount() {
    console.log("<Mounted /> WillUnmount")
  }

  render () {
    return <h2>Mounted!</h2>
  }

}

export default Mounted;