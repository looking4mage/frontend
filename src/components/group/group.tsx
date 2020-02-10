import React, { ReactElement } from 'react';

import './group.scss';
import { GroupChat } from '../group-chat';

export function Group(): ReactElement {
  return (
    <div className="c-group">
      <div>Users</div>
      <div>
        <GroupChat />
      </div>
      <div>Calendar</div>
    </div>
  );
}
