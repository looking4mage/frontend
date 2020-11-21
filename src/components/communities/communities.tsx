import React, { ReactElement } from 'react';

import './communities.scss';
import { CustomLink } from '../../utils/helpers';

export function Communities(): ReactElement {
  return (
    <ul className="c-communities">
      <li>
        <CustomLink href="/group/1">Group 1</CustomLink>
      </li>
    </ul>
  );
}
