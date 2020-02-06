import React, { ReactElement } from 'react';

import './group.scss';

export function Group(): ReactElement {
  return (
    <div className="c-group">
      <div>Users</div>
      <div>Chat</div>
      <div>Calendar</div>
    </div>
  );
}
