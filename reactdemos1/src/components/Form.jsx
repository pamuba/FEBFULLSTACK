import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       username:'John',
       comments:'',
       topic:'vue'
    }
  }
  handleUsernameChange = (e) => {
    this.setState({
        username:e.target.value
    })
  }

  handleCommentsChange = (e) => {
    this.setState({
        comments:e.target.value
    }) 
  }

  handleTopicChange = (e) => {
    this.setState({
        topic:e.target.value
    }) 
  }
  handleSubmit = (e) => {
      alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <div>
              <label>Username</label>
              <input onChange={this.handleUsernameChange} value={this.state.username} type="text" />
          </div>
          <div>
              <label>Comments</label>
              <textarea onChange={this.handleCommentsChange} value={this.state.comments} type="text" />
          </div>
          <div>
              <label>Topic</label>
              <select onChange={this.handleTopicChange} value={this.state.topic}>
                  <option value="react">React</option>
                  <option value="angular">Angular</option>
                  <option value="vue">Vue</option>
              </select>
          </div>
          <button type='submit'>Save</button>
      </form>
    )
  }
}

export default Form