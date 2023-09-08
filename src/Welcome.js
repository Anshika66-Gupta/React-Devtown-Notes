import React, { Component } from 'react'

class Welcome extends Component {
  render() {
    return (
        <div>
            <h1>Welcome to today's session{this.props.name} who loves to do {
            this.props.hobby}</h1>
            </div>
    )
  }
}

export default Welcome