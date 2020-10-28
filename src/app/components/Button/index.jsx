import React from 'react';
import cx from 'classnames';
import './Button.scss';

export const Button = ({
  styleType = 'blank', size = 'md', children, ...restProps
}) => (
  <button
    className={cx('custom-button', `custom-button--${styleType}`, `custom-button--size-${size}`)}
    {...restProps}
  >
    {children}
  </button>
);
