import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import './FadeToogleAnimation.scss';

export const FadeToggle = ({ children, transitionLeave } = { transitionLeave: true }) => (
  <CSSTransitionGroup
    transitionName="fade-toggle"
    transitionEnterTimeout={500}
    transitionLeaveTimeout={300}
    transitionLeave={transitionLeave}
  >
    {children}
  </CSSTransitionGroup>
);
