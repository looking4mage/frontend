import React, { ReactElement } from 'react';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { MainUnauthorized } from '../main-unauthorized';
import './app.scss';

interface IAppProperties {
  readonly className?: string;
}

export function App(_props: IAppProperties): ReactElement {
  return (
    <div className="c-app">
      <div>Header</div>
      <Router>
        <Switch>
          <Route path="/" component={MainUnauthorized} />
        </Switch>
      </Router>
      <div>Footer</div>
    </div>
  );
}
