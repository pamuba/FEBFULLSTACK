import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count:0
    }
  }
  incrementCount(){
     //setState is async
    //  this.setState({
    //     count: this.state.count + 1
    //  },() => {console.log('Callback value:', this.state.count)})
     
    //  //below is executed before setState finishes
    //  console.log(this.state.count)

    this.setState(prevState => ({
        count: prevState.count + 1
    }))
    console.log(this.state.count)
  }
  incrementFive(){
      this.incrementCount()
      this.incrementCount()
      this.incrementCount()
      this.incrementCount()
      this.incrementCount()
  }
  render() {
    return (
      <>
        <h2>Count - {this.state.count}</h2>
        <button onClick={()=>this.incrementCount()}>Increment1</button>
        <button onClick={()=>this.incrementFive()}>Increment5</button>
      </>
    )
  }
}

export default Counter