import React from "react";
import '../dashboard-components/main.css'


function LoginForm(props) {


  return (
    <form onSubmit={props.handleOnSubmit}>
      <div className="form-group">

        <label htmlFor="userName">
          User Name
        </label>

        <input id="userName" className="form-control form-control-lg" type="email" placeholder="email@email.com" onChange={props.handleInputChange} value={props.userName} name="userName" />

        <label htmlFor="password">
          Password
    </label>
        <input id="password" className="form-control form-control-lg" type="password" placeholder="Password" onChange={props.handleInputChange} value={props.password} name="password" />
        <div className="mt-2">
          <input type="submit" className="btn btn-primary" onClick={props.handleOnSubmit} />

          <input type="button" className="btn btn-primary" onClick={props.registerClick} value="Register New User" />
        </div>
      </div>
    </form>
  )
}

export default LoginForm;