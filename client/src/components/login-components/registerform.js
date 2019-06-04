import React, { Component } from "react";
import "./home-style.css";


function RegisterForm (props) {

  
  // start render area
 

    return (
      <form onSubmit={props.handleOnSubmit}>
        <div className="form-group">
  
        <label htmlFor="userName">
          User Name (Email)
        </label>
        <input id="userName" className="form-control form-control-lg" type="email" placeholder="email@email.com" onChange={props.handleInputChange} value={props.userName} name="userName" />
  
        <label htmlFor="firstName">
          First Name
        </label>
        <input id="firstName" className="form-control form-control-lg" type="text" placeholder="Jane" onChange={props.handleInputChange} value={props.firstName} name="firstName"/>
  
        <label htmlFor="lastName">
          Last Name
        </label>
        <input id="lastName" className="form-control form-control-lg" type="text" placeholder="Doe" onChange={props.handleInputChange} value={props.lastName} name="lastName"/>
  
        <label htmlFor="password">
          Password
        </label>
        <input id="password" className="form-control form-control-lg" type="password" placeholder="email@email.com" onChange={props.handleInputChange} value={props.password} name="password"/>
  
        <input type="submit" className="btn btn-primary" />

        <input type="button" className="btn btn-primary" onClick={props.loginClick} value="Login Existing User" />
        </div>
      </form>
    )

}


export default RegisterForm;