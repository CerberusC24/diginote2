import React, { Component } from 'react';
import { Redirect} from 'react-router-dom'
import LoginForm from "../components/login-components/loginform";
import RegisterForm from "../components/login-components/registerform";
import swal from 'sweetalert';
import { login, register } from "../utils/API";

// setting a state that allows for view switching
class Home extends Component {
  // start copied section

  // state information 
  state = {
    userName: "",
    password: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  }

  // start register function

  handleRegisterClick = event => {
    this.setState({
      register: true
    })
  }

  // end register function

   // start handleRegisterSubmit function
   handleRegisterSubmit = event => {
    event.preventDefault();

    // start if statements

    if (!this.state.firstName || !this.state.lastName || !this.state.userName || !this.state.password){
      swal("Please fill the form out completely so we can handle your request"
      )
    }
    else {
    const userInfo = {
      userName: this.state.userName,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      password: this.state.password,
    }
    register(userInfo)



    this.setState({
      userName: "",
      firstName: "",
      lastName: "",
      password: ""
    });
  }
    // end if statements

  }
  // end handleRegisterSubmit function

    // start onSubmit function
    handleLoginSubmit = event => {
    event.preventDefault();

    // start if statements

    if (!this.state.userName || !this.state.password){
      swal("Please fill the form out completely so we can handle your request"
      )
    }
    else {
    const userInfo = {
      userName: this.state.userName,
      password: this.state.password,
    }
    login(userInfo)
      .then(({data: token}) => {
        console.log(token);
        this.setState({
          token: token,
          redirect: true
        })
      });
      
    

    
    
    this.setState({
    userName: "",
    password: ""
    });
  }
    // end if statements

  }

  // end copied section

  // loginClick function

  loginClick = () => {
    this.setState({
      register: false
    })
  }

  // end loginClick function

  redirect = (token) => {
    if (this.state.token) {
      return <Redirect to={{
        pathname: '/dashboard',
        state: { token: token }
      }}
      />
    }
  }
  render()  {
    return (
      
        <div>
          {this.redirect(this.state.token)}

          {this.state.register ? 
          <RegisterForm 
          handleOnSubmit={this.handleRegisterSubmit}
          handleInputChange={this.handleInputChange}
          userName={this.state.userName}
          lastName={this.state.lastName}
          password={this.state.password}
          loginClick={this.loginClick}
          
          /> : 
          <LoginForm 
          handleOnSubmit={this.handleLoginSubmit}
          handleInputChange={this.handleInputChange}
          userName={this.state.userName}
          password={this.state.password}
          registerClick={this.handleRegisterClick}
          />
        }
        </div>
      
    )
    
  }
}

export default Home;