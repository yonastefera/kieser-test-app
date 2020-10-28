import React, { PureComponent } from 'react';
import { Button } from '../Button';
import { BarsIcon } from '../Icons';
import './Header.scss';

export class Header extends PureComponent {
  render() {
    return (
      <header className="custom-header" role="header">
        <a href="#main-content" className="custom-header__skip" aria-label="skip to main content" />
        <section className="custom-header__apply-container">
          <section className="custom-header__line"/>
          <Button styleType='green'>Apply Now</Button>
        </section>
        <nav className="custom-header__menu" role="navigation">
          <input type="checkbox" role="dialog" aria-label="open menu button, use space"/>
          <BarsIcon/>
          <menu className="custom-header__menu-list">
            <li className="custom-header__menu-item">
              <a href="#home">Home</a>
            </li>
            <li className="custom-header__menu-item">
              <a href="#live_happy">Live Happy</a>
            </li>
            <li className="custom-header__menu-item">
              <a href="#live_healthy">Live Healthy</a>
            </li>
          </menu>
        </nav>
      </header>
    );
  }
}
