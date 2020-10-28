import React from 'react';
import { CheckIcon } from '../../../components/Icons';
import { Link } from './Link';
import './ContentBlock.scss';

const links = [
  'Some links',
  'Some links',
  'Some links',
  'Some links',
  'Some links',
  'Some links',
  'Some links',
  'Some links',
];
export const ContentBlock = () => (
  <article className="content-block" aria-labelledby="page description">
    <header className="content-block__header">
      <h1>Welcome to Development</h1>
      <span className="content-block__header-description">Please be thorough when coding...</span>
    </header>
    <section className="content-block__description" >
      Building websites is a great time to re ect on the cool things we can do with code. We get to add alt tags, code
      links and get to stand by the latest in HTML or pre-processors like sass or less. If you like webpack you'll love
      the project we have set up for you. Good luck and have some fun!
    </section>
    <ul className="content-block__links-list" role="list" aria-labelledby="list of useful links">
      {links.map((x, index) => (
        <li key={`link${index}`} className="content-block__link-item">
          <Link url={`#link${index}`}>
            <CheckIcon/> {x}
          </Link>
        </li>
      ))}
    </ul>
  </article>
);
