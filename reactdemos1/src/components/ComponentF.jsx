import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

export class ComponentF extends Component {
  render() {
    return (
      <div>ComponentF
          <UserConsumer>
              {
                  (username) => {
                        return <h1>Hello {username}</h1>
                  }
              }
          </UserConsumer>

      </div>
    )
  }
}

export default ComponentF