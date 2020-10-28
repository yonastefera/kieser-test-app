import React from 'react';
import { Button } from '../../../components/Button/index';
import ducks from '../../../../assets/ducks.jpg';

export const DuckSlide = () => (
  <section className="slide">
    <img className="slide__image" src={ducks} alt="ducks image"/>
    <section className="slide__content">
      <h2> Building Better Leaders</h2>
      <span className="slide__content__text">Without ducking out of the holiday party too quick</span>
      <Button styleType="orange" size="sm">Free Advice</Button>
    </section>
  </section>
);
