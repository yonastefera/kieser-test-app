import React from 'react';
import { Header } from '../../components/Header';
import { Slider } from '../../components/Slider';
import { Button } from '../../components/Button';
import { Comments } from '../../components/Comments';
import { ContentBlock } from './ContentBlock/index';
import { CatSlide, DuckSlide } from './Slides';
import comments from './comments';
import './App.scss';

export default class App extends React.Component {
  render() {
    return (
      <main className="coding-app">
        <section className="coding-app__container">
          <Header/>
          <Slider total={2}>
            <CatSlide/>
            <DuckSlide/>
          </Slider>
          <section className="coding-app__content" id="main-content">
            <ContentBlock/>
            <Comments comments={comments}/>
          </section>
        </section>
        <section className="coding-app__orange-section" aria-label="orange section">
          <h3>Let's put an end to world hunger today</h3>
          <Button>Free Advice</Button>
        </section>
        <section className="coding-app__black-section" aria-label="black section">
          <h2>Changing the world one pixel at a time.</h2>
          <Button>Box Model</Button>
        </section>
        <footer className="coding-app__footer">
          <menu className="coding-app__footer-menu">
            <li className="coding-app__footer-menu-item">
              <a href="#link1">LINK1</a>
            </li>
            <li className="coding-app__footer-menu-item">
              <a href="#link2">LINK2</a>
            </li>
            <li className="coding-app__footer-menu-item">
              <a href="#link3">LINK3</a>
            </li>
            <li className="coding-app__footer-menu-item">
              <a href="#link4">LINK4</a>
            </li>
          </menu>
          <span className="coding-app__footer__copyright">COPYRIGHT © 2017. BUILT BY A CONFIDENT DEVELOPER</span>
        </footer>
      </main>
    );
  }
}
