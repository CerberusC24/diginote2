import React, { Component } from 'react';

class Dashboard extends Component {
  state = {
    token: this.props.location.state.token
  }

  render()  {
    return (
      <h1>Hi from the dashboard</h1>
    )
  }
}

export default Dashboard