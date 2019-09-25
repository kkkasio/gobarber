import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SingOut from '../pages/SingOut';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/sigout" exact component={SingOut} />

      <Route path="/profile" exact component={Profile} />
      <Route path="/dashboard" exact component={Dashboard} />
    </Switch>
  );
}
