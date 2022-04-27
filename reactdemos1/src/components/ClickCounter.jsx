import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class ClickCounter extends Component {
  
  render() {
    const {name, count, incrementCount} = this.props
    return (
      <button onClick={incrementCount}>{name} Clicked {count} Times</button>
    )
  }
}

export default UpdatedComponent(ClickCounter)