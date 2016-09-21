import React from 'react';

export class Mount extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.clicks % 2
  }

  render () {
   return <button onClick={this.props.onClick} >Mount number {this.props.clicks} </button>
  }
}

export class Unmount extends React.Component {
  render () {
    return <button {...this.props}>Unmount</button>
  }
}

