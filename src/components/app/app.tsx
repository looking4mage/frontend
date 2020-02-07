import React, { ReactElement } from 'react';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Login } from '../login';
import { MainUnauthorized } from '../main-unauthorized';
import { Register } from '../register';
import './app.scss';
import { Group } from '../group';

interface IAppProperties {
  readonly className?: string;
}

export function App(_props: IAppProperties): ReactElement {
  return (
    <div className="c-app">
      <div>Header</div>
      <Router>
        <Switch>
          <Route exact path="/" component={MainUnauthorized} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/group/:id" component={Group} />
        </Switch>
      </Router>
      <div>Footer</div>
    </div>
  );
}
