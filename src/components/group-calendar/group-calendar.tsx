import React, { ReactElement } from 'react';
import './group-calendar.scss';

export function GroupCalendar(): ReactElement {
  return (
    <div className="c-group-calendar">
      <h3 className="c-group-calendar__header">Calendar</h3>
      <div className="c-group-calendar__container">
        <div className="c-group-calendar__day">
          <h2 className="c-group-calendar__day--content">1</h2>
          <div className="c-group-calendar__selection">
            <div className="c-group-calendar__selection--available" />
            <div className="c-group-calendar__selection--uncertain" />
            <div className="c-group-calendar__selection--absent" />
          </div>
        </div>
      </div>
    </div>
  );
}
