import React, { ReactElement } from 'react';
import './group-chat.scss';
import { Message } from '../message';

export function GroupChat(): ReactElement {
  return (
    <div className="c-group-chat">
      <h3>Chat</h3>
      <div className="c-group-chat__container">
        <Message />
      </div>
    </div>
  );
}
