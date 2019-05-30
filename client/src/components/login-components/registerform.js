import React, { Component } from "react";
import "./home-style.css";
import swal from 'sweetalert';
import { register } from "../../utils/API";

class  RegisterForm extends Component {

  // state information 
  state = {
    userName: "",
    firstName: "",
    lastName: "",
    password: ""
  };

  // start input change function
  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });

    
  
  }
  // end input change function

  // start onSubmit function
  handleOnSubmit = event => {
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
    register(userInfo);

    this.setState({
      userName: "",
    firstName: "",
    lastName: "",
    password: ""
    });
  }
    // end if statements

  }
  // end onSubmit function

  // start render area
  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <div className="form-group">
  
        <label htmlFor="userName">
          User Name (Email)
        </label>
        <input id="userName" className="form-control form-control-lg" type="email" placeholder="email@email.com" onChange={this.handleInputChange} value={this.state.userName} name="userName" />
  
        <label htmlFor="firstName">
          First Name
        </label>
        <input id="firstName" className="form-control form-control-lg" type="text" placeholder="Jane" onChange={this.handleInputChange} value={this.state.firstName} name="firstName"/>
  
        <label htmlFor="lastName">
          Last Name
        </label>
        <input id="lastName" className="form-control form-control-lg" type="text" placeholder="Doe" onChange={this.handleInputChange} value={this.state.lastName} name="lastName"/>
  
        <label htmlFor="password">
          Password
        </label>
        <input id="password" className="form-control form-control-lg" type="password" placeholder="email@email.com" onChange={this.handleInputChange} value={this.state.password} name="password"/>
  
        <input type="submit" class="btn btn-primary" />
        </div>
      </form>
    )
  };
  // end render area
}


export default RegisterForm;