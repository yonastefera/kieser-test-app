import React, { PureComponent } from 'react';
import uuid from 'uuid';
import { FadeToggle } from '../../animations/FadeToogleAnimation';
import { Button } from '../Button';
import { SlideWrapper } from './SlideWrapper';
import { RightArrow, LeftArrow } from '../Icons';
import './Slider.scss';

const DEFAULT_INTERVAL = 5000;

export class Slider extends PureComponent {
  constructor(props) {
    super(props);
    const { interval } = this.props;
    const animationInterval = setInterval(this.nextSlide, interval || DEFAULT_INTERVAL);
    this.state = {
      selectedSlide: 0,
      animationInterval,
    };
  }

  prevSlide = () => {
    const { selectedSlide } = this.state;
    const { total } = this.props;
    const nextSlide = selectedSlide !== 0 ? selectedSlide - 1 : total - 1;
    this.setState({
      selectedSlide: nextSlide,
    });
  }

  nextSlide = () => {
    const { selectedSlide } = this.state;
    const { total } = this.props;
    const nextSlide = selectedSlide + 1 < total ? selectedSlide + 1 : 0;
    this.setState({
      selectedSlide: nextSlide,
    });
  }

  handlePrevClick = () => {
    const { animationInterval } = this.state;
    if (animationInterval) {
      clearInterval(animationInterval);
      this.setState({ animationInterval: null });
    }
    this.prevSlide();
  }

  handleNextClick = () => {
    const { animationInterval } = this.state;
    if (animationInterval) {
      clearInterval(animationInterval);
      this.setState({ animationInterval: null });
    }
    this.nextSlide();
  }

  handleSwipe = ({ swipeDirection }) => {
    const { animationInterval } = this.state;
    if (swipeDirection === 'left') {
      this.prevSlide();
    } else {
      this.nextSlide();
    }
    clearInterval(animationInterval);
  }

  render() {
    const { selectedSlide } = this.state;
    const { children } = this.props;
    const mapped = (
      <SlideWrapper onSwipe={this.handleSwipe} key={uuid()}>
        {children[selectedSlide]}
      </SlideWrapper>
    );

    return (
      <section className="slider" role="slider">
        <Button
          className="slider__button slider__button--left"
          onClick={this.handlePrevClick}
          aria-label="previous slide"
        >
          <LeftArrow/>
        </Button>
        <FadeToggle>
          {mapped}
        </FadeToggle>
        <Button
          className="slider__button slider__button--right"
          onClick={this.handleNextClick}
          aria-label="next slide"
        >
          <RightArrow/>
        </Button>
      </section>
    );
  }
}
