import React from 'react';
import Dashboard from '../components/dashboard-components/Dashboard'


class userDashboard extends Component  {

  state = {
    token: this.props.location.state.token
  }
  render () {
    return (
      <Dashboard />
    )
  }
  

}

export default userDashboard;
