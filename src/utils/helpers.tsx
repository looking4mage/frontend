import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';

interface ICustomLinkProperties
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  readonly href: string;
}

type IRecordHistory = (event: React.FormEvent<HTMLAnchorElement>) => boolean;

function recordHistory(href: string): IRecordHistory {
  const history = useHistory();

  return e => {
    e.preventDefault();
    history.push(href);

    return false;
  };
}

export function CustomLink(props: ICustomLinkProperties): ReactElement {
  return (
    <a
      {...props}
      onClick={recordHistory(props.href)}
      onKeyDown={recordHistory(props.href)}
      role="button"
      tabIndex={0}
    >
      {props.children}
    </a>
  );
}
