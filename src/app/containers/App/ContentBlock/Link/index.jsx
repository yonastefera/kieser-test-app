import React from 'react';
import './Link.scss';

export const Link = ({ url, children, ...restProps }) => (
  <a
    className="content-link"
    href={url}
    {...restProps}
  >
    {children}
  </a>
);
