import React, { Component } from 'react';

class Mounted extends Component {
  
   componentWillMount() {
    console.log("<Mounted /> WillMount")
  }

  componentDidMount() {
    console.log(this.props)

  }

  componentWillUnmount() {
    console.log("<Mounted /> WillUnmount")
  }

  render () {
    return <div>
              <h2>Mounted!</h2>
              <div>{this.props.children}</div>
           </div>
  }

}

export default Mounted;