import React, { Component } from 'react'
import axios from 'axios'

export class PostList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       posts:[]
    }
  }
  componentDidMount(){
      axios.get('https://jsonplaceholder.typicode.com/posts')
           .then(res => {
               console.log(res)
               this.setState({
                   posts:res.data
               })
           })
           .catch(err=>{
               console.log(err)
           })
  }
  render() {
    const {posts} = this.state
    return (
      <div>
          <h1>List of Posts</h1>
          <input type="text" ></input>
          {
              posts.length ? 
              posts.map(post => <div key={post.id}>{post.title}</div>):
              null
          }
       </div>
    )
  }
}

export default PostList