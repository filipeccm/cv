import React from 'react';

const NavItem = (props) => {
  return (
    <li>
      <a href={props.link}>
        <div>{props.item}</div>
        <div className="underline"></div>
      </a>
    </li>
  );
};

export default NavItem;
