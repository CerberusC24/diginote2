import React, { Component } from 'react';
import LoginForm from "../components/login-components/loginform";
import RegisterForm from "../components/login-components/registerform"
class Home extends Component {
  state = {

  }

  render()  {
    return (
      <div>
        <RegisterForm />
      </div>
    )
    
  }
}

export default Home;