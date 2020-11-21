import React, { ReactElement } from 'react';
import './main-unauthorized.scss';
import { Communities } from '../communities';

export function MainUnauthorized(): ReactElement {
  return (
    <div className="c-main-unauthorized">
      <Communities />
      <div>middle</div>
      <div>right</div>
    </div>
  );
}
