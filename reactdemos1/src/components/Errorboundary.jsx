import React, { Component } from 'react'

class Errorboundary extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        hasError : false
    }
  }
  //create a fallback UI
  static getDerivedStateFromError(error){
      return {
          hasError: true
      }
  }

  //logger function
  componentDidCatch(error, info){
      console.log(error)
      console.log(info)
  }

  render() {
      if(this.state.hasError){
          return <h1>Something Went Wrong</h1>
      }
      else{
          return this.props.children
      }
  }
}

export default Errorboundary