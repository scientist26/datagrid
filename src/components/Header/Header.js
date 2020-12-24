import React from 'react';
import './Header.scss';
import { DiGithubBadge } from 'react-icons/di';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Data Grid</h1>
      <a
        className="header__link hover-shadow hover-color"
        target="_blank"
        rel="noreferrer"
        href="https://github.com/scientist26"
      >
        <DiGithubBadge size="2rem" className="header__link--logo" />
        <span>g</span>
        <span>i</span>
        <span>t</span>
        <span>h</span>
        <span>u</span>
        <span>b</span>
      </a>
    </header>
  );
};

export default Header;
