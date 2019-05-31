import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import userDashboard from './pages/dashboard';
import Home from './pages/home';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={userDashboard} />
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
