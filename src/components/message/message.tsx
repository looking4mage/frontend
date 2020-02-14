import React, { ReactElement } from 'react';
import './message.scss';

export function Message(): ReactElement {
  return (
    <div className="c-message">
      <div className="c-message__user">
        <p>Username</p>
        <p className="c-message__user--date">20-02-2020</p>
      </div>
      <p className="c-message__content">Content of the message</p>
    </div>
  );
}
