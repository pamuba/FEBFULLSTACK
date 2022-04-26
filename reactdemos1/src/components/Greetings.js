import React, { Component } from 'react'

class Greetings extends Component {
  render() {
    return (
      <>
         <h3>Hello {this.props.name} aka {this.props.heroName}</h3>
         <h3>{this.props.children}</h3>
      </>
    )
  }
}

export default Greetings