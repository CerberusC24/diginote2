import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import Dashboard from '../components/dashboard-components/Dashboard'


class userDashboard extends Component {

  state = {
    token: this.props.location.state.token
  }

  logoutOnClick = () => {
    this.setState({
      token: ""
    })

    if (!this.state.token) {
      return <Redirect to="/" />
    }

  }
  render () {
    return (

      <Dashboard token={this.state.token} logoutOnClick={this.logoutOnClick}/>
    
    )
    
}

}
export default userDashboard;
