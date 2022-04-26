import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
  constructor(props) {
    super(props)
  
    this.greetParent = this.greetParent.bind(this)

    this.state = {
       parentName:"Parent Component"
    }
  }
  greetParent(){
      alert(`Hello ${this.state.parentName}`)
  }
  render() {
    return (
      <div><ChildComponent greetHandler={this.greetParent}/></div>
    )
  }
}

export default ParentComponent