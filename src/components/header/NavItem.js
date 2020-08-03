import React from 'react';

const NavItem = ({ link, item }) => {
  return (
    <li>
      <a href={link}>
        <div>{item}</div>
        <div className="underline"></div>
      </a>
    </li>
  );
};

export default NavItem;
