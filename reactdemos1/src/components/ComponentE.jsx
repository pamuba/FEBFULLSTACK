import React, { Component } from 'react'
import ComponentF from './ComponentF'

export class ComponentE extends Component {
  render() {
    return (
      <div>ComponentE
          <ComponentF></ComponentF>
      </div>
    )
  }
}

export default ComponentE