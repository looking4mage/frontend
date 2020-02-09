import React, { ReactElement } from 'react';

import './group.scss';
import { GroupCalendar } from '../group-calendar';

export function Group(): ReactElement {
  return (
    <div className="c-group">
      <div>Users</div>
      <div>Chat</div>
      <GroupCalendar />
    </div>
  );
}
