import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:"John"
    }
  }
  componentDidMount(){
      setInterval(()=>{
          this.setState({
              name:"John"
          })
      }, 1000)
  }
  render() {
    console.log("************************Parent Compont Render***************************")
    return (
      <>Pure Component
        <RegComp name={this.state.name}></RegComp>
        <PureComp name={this.state.name}></PureComp>
      </>
    )
  }
}

export default ParentComp