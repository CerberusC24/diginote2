import React from "react";
import "./home-style.css";

function LoginForm () {
  return (
    <form>
      <div className="form-group">

      <label htmlFor="userName">
        User Name
      </label>
      <input id="userName" className="form-control form-control-lg" type="email" placeholder="email@email.com" />

      <label htmlFor="password">
        Password
      </label>
      <input id="password" className="form-control form-control-lg" type="password" placeholder="email@email.com" />

      <input type="submit" class="btn btn-primary" />
      </div>
    </form>
  )
}

export default LoginForm;