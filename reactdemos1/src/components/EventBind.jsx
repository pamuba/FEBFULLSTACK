import React, { Component } from 'react'

class EventBind extends Component {
  constructor(props) {
    super(props)
   
    this.change = this.change.bind(this)

    this.state = {
       message: 'Hello'
    }
  }
  change(){
      this.setState({
          message: "How are you!!"
      })
    console.log(this)
  }
  render() {
    return (
      <>
        <h2>{this.state.message}</h2>
        <button onClick={()=>this.change()}>CLICK</button>
        <button onClick={this.change}>CLICK</button>
        <button onClick={this.change.bind(this)}>CLICK</button>
      </>
    )
  }
}

export default EventBind