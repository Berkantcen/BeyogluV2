import React from 'react';
import Navigation from './Navigation';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <p
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        Menu
      </p>

      {isOpen && <Navigation setIsOpen={setIsOpen} />}
    </header>
  );
};

export default Header;
