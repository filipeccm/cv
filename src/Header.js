import React, { useState, useEffect } from 'react';

import './Header.css';

import NavItem from './NavItem';

const Header = () => {
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    const fixTheHeader = () => {
      if (window.scrollY > 60) {
        setFixed(true);
        console.log('hi');
      } else {
        setFixed(false);
      }
    };
    window.addEventListener('scroll', fixTheHeader);
  }, [fixed]);

  return (
    <nav>
      <ul className={fixed ? 'nav-bar fixed' : 'nav-bar'}>
        <NavItem item={'Home'} link={'#home'} />
        <NavItem item={'Projects'} link={'#projects'} />
        <NavItem item={'Career'} link={'#career'} />
      </ul>
    </nav>
  );
};

export default Header;
