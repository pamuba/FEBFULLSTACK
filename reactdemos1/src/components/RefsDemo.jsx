import React, { Component } from 'react'

export class RefsDemo extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
    //callback ref
    this.cbRef = null
    this.setCbRef = element => {
        this.cbRef = element
    }
  }
  componentDidMount(){
    //   console.log(this.inputRef)
    //   this.inputRef.current.focus()
    if(this.cbRef){
        this.cbRef.focus()
    }
  }
  clickHandler = () => {
      alert(this.inputRef.current.value)
  }
  render() {
    return (
      <div>
          <input type="text" ref={this.inputRef}/>
          <hr></hr>
          <input type="text" ref={this.setCbRef}/>
          <hr></hr>
          <button onClick={this.clickHandler}>CLICK</button>
      </div>
    )
  }
}

export default RefsDemo