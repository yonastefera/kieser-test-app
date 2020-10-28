import React, { PureComponent } from 'react';
import uuid from 'uuid';
import { FadeToggle } from '../../animations/FadeToogleAnimation';
import { QuoteRight, LeftArrow, RightArrow } from '../Icons';
import { Button } from '../Button';
import './Comments.scss';

const formatDate = (date) => {
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return `${day}/${monthIndex}/${year}`;
};

export class Comments extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedComment: 0,
    };
  }

  nextComment = () => {
    const { selectedComment } = this.state;
    const { comments } = this.props;
    const nextComment = selectedComment + 1 < comments.length ? selectedComment + 1 : 0;
    this.setState({
      selectedComment: nextComment,
    });
  }

  prevComment = () => {
    const { selectedComment } = this.state;
    const { comments } = this.props;
    const nextComment = selectedComment !== 0 ? selectedComment - 1 : comments.length - 1;
    this.setState({
      selectedComment: nextComment,
    });
  }
  renderComment = (comment) => {
    const date = new Date();
    date.setTime(comment.timestamp);
    return (
      <section key={uuid()} className="comments__item" aria-label="current comment">
        <QuoteRight/>
        <section id="comment" className="comments__item-content" aria-label="text of comment">
          {comment.comment}
        </section>
        <footer className="comments__item-footer">
          <span className="comments__item-info" aria-label="user name and date of creating">
            {`${comment.name}, ${formatDate(date)}`}
          </span>
        </footer>
      </section>
    );
  }

  render() {
    const { comments } = this.props;
    const { selectedComment } = this.state;
    const comment = comments[selectedComment];
    return (
      <article role="main" className="comments" aria-label="slider with user comments">
        <section className="comments_container">
          <FadeToggle transitionLeave={false}>
            {
              this.renderComment(comment)
            }
          </FadeToggle>
        </section>
        <section className="comments__buttons">
          <Button
            onClick={this.prevComment}
            aria-label="previous comment"
          >
            <LeftArrow/>
          </Button>
          <Button
            onClick={this.nextComment}
            aria-label="next comment"
          >
            <RightArrow/>
          </Button>
        </section>
      </article>
    );
  }
}
