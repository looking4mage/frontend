import React, { ReactElement } from 'react';

import './group.scss';
import { GroupCalendar } from '../group-calendar';
import { GroupChat } from '../group-chat';

export function Group(): ReactElement {
  return (
    <div className="c-group">
      <div>Users</div>
      <GroupChat />
      <GroupCalendar />
    </div>
  );
}
