import React, { Fragment, ReactElement } from 'react';
import './app.scss';

interface IAppProperties {
  readonly className?: string;
}

export function App(_props: IAppProperties): ReactElement {
  return (
    <Fragment>
      <h1 className="app">App</h1>
    </Fragment>
  );
}
