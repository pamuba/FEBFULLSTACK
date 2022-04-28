import React, { Component } from 'react'
import ComponentE from './ComponentE'

export class ComponentC extends Component {
  render() {
    return (
      <div>ComponentC
          <ComponentE></ComponentE>
      </div>
    )
  }
}

export default ComponentC