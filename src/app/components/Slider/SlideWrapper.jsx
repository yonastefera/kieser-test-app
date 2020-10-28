import React, { PureComponent } from 'react';

export class SlideWrapper extends PureComponent {
  threshold = 80;
  restraint = 100;

  touchStart = ({ changedTouches }) => {
    const [touchobj] = changedTouches;
    this.setState({
      startX: touchobj.pageX,
      startY: touchobj.pageY,
    });
  }

  touchEnd = ({ changedTouches }) => {
    const { onSwipe } = this.props;
    const { startX, startY } = this.state;
    const [touchobj] = changedTouches;
    const distX = touchobj.pageX - startX;
    const distY = touchobj.pageY - startY;
    if (Math.abs(distX) >= this.threshold && Math.abs(distY) <= this.restraint) {
      const swipeDirection = (distX < 0) ? 'left' : 'right';
      onSwipe({ swipeDirection });
    }
  }

  render() {
    const { children, key } = this.props;
    return (
      <a
        href="#swipedElement"
        onTouchStart={this.touchStart}
        onTouchEnd={this.touchEnd}
        className='slider__item'
        key={key}
      >
        {children}
      </a>
    );
  }
}
