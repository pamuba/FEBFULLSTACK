import React, {Component} from 'react'
import {connect} from 'react-redux'
import { getUsersRequest, createUserRequest, deleteUserRequest, usersError } from '../actions/users';
import NewUserForm from './NewUserForm';
import UsersList from './UsersList';
import {Alert} from 'reactstrap';

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
  handleCloseAlert = () => {
    this.props.usersError({
        error: ''
    });
  };
  handleDeleteUserClick = (userId) => {
    this.props.deleteUserRequest(userId);
  };

  render(){
    const users = this.props.users
    // console.log(users.items)
    return (
      <div style={{margin:'0 auto', padding:'20px', maxWidth:'600px'}}>
        <h2>
            Users
        </h2>
        <Alert color="danger" isOpen={!!this.props.users.error} toggle={this.handleCloseAlert}>
            {this.props.users.error}
        </Alert>
        <NewUserForm onSubmit={this.handleSubmit}/>
        <UsersList onDeleteUser={this.handleDeleteUserClick} users={users.items} />
      </div>
    );
  }
}

export default connect(({users})=>({users}), {
  getUsersRequest,
  createUserRequest,
  deleteUserRequest, 
  usersError
})(App);
