import axios from 'axios'
import React, { Component } from 'react'

class PostForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       userId:'',
       title:'',
       body:''
    }
  }
  changeHandler = (e) => {
      this.setState({
          [e.target.name]:e.target.value
          //[e.target.userId]:e.target.value
          //[e.target.title]:e.target.value
          //[e.target.body]:e.target.value
      })
  }
  submitHandler = (e) => {
      e.preventDefault()

      console.log(this.state)
      axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
           .then(
               res=>console.log(res)
           )
           .catch((err) => {})
  }
  render() {
    const {userId, title, body} = this.state
    return (
      <div>
          <form onSubmit={this.submitHandler}>
              <div>
                  <input type="text" name="userId" value={userId} onChange={this.changeHandler}/>
              </div>
              <div>
                  <input type="text" name="title" value={title} onChange={this.changeHandler}/>
              </div>
              <div>
                  <input type="text" name="body" value={body} onChange={this.changeHandler}/>
              </div>
              <div>
                  <button type="submit">SUBMIT</button>
              </div>
          </form>
      </div>
    )
  }
}

export default PostForm