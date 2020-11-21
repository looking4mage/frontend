import React, { ReactElement } from 'react';

import './header.scss';
import { CustomLink } from '../../utils/helpers';

export function Header(): ReactElement {
  return (
    <div className="c-header">
      <CustomLink href="/">Header</CustomLink>
    </div>
  );
}
