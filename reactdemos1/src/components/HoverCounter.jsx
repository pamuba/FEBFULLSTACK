import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class HoverCounter extends Component {
    
  render() {
    const {name, count, incrementCount} = this.props
    return (
        <h2 onMouseOver={incrementCount}>{name} Hovered {count} Times</h2>
    )
  }
}

export default UpdatedComponent(HoverCounter)