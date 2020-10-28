import React from 'react';
import { Button } from '../../../components/Button/index';
import catImage from '../../../../assets/cat.jpg';

export const CatSlide = () => (
  <section className="slide">
    <img className="slide__image" src={catImage} alt="cat image"/>
    <section className="slide__content">
      <h2> Building Better Leaders</h2>
      <span className="slide__content__text">Without ducking out of the holiday party too quick</span>
      <Button styleType="orange" size="sm">Free Advice</Button>
    </section>
  </section>
);
