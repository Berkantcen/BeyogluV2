import React from 'react';
import { useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';

const Navigation = ({ setIsOpen }) => {
  const [navList, setNavList] = useState([
    'Kahvaltı',
    'Burger',
    'Pizza',
    'Mangal',
    'Kırmızı Et',
    'Salatalar',
    'Beyaz Et',
    'Waffle',
    'Tatlılar',
    'İçecekler',
  ]);

  const handleClickAway = () => {
    setIsOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <ul className="navigation-list">
        {navList.map((nav, idx) => (
          <li className="navigation-item" key={idx}>
            <a
              href={`#${nav}`}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              {nav}
            </a>
          </li>
        ))}
      </ul>
    </ClickAwayListener>
  );
};

export default Navigation;
