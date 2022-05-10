import React, {Component} from 'react'
import {connect} from 'react-redux'
import { getUsersRequest } from '../actions/users';

class App extends Component {
  constructor(props) {
    super(props)
    this.props.getUsersRequest()
  }
  render(){
    return (
      <div>
        Test
      </div>
    );
  }
}

export default connect(null, {getUsersRequest})(App);
