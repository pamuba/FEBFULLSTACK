import React, {Component} from 'react'
import {connect} from 'react-redux'
import { getUsersRequest, createUserRequest } from '../actions/users';
import NewUserForm from './NewUserForm';
import UsersList from './UsersList';

class App extends Component {
  constructor(props) {
    super(props)
    this.props.getUsersRequest()
  }
  handleSubmit = ({username, name}) => {
    // console.log(username, name)
    this.props.createUserRequest({
      username,
      name
    })
  }
  render(){
    const users = this.props.users
    // console.log(users.items)
    return (
      <div style={{margin:'0 auto', padding:'20px', maxWidth:'600px'}}>
        <NewUserForm onSubmit={this.handleSubmit}/>
        <UsersList users={users.items} />
      </div>
    );
  }
}

export default connect(({users})=>({users}), {
  getUsersRequest,
  createUserRequest
})(App);
