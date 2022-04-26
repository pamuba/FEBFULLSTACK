import React, { Component } from 'react'

class Message extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
       message:'Welcome to the Site'
    }
  }
  changeMessage(){
      console.log("Inside")
      this.setState({
        message:'New Message'
      })
  }
  render() {
    return (
      <>
          <h1>{this.state.message}</h1>
          <button onClick={()=>this.changeMessage()}>CLICK</button>
      </>
    )
  }
}

export default Message