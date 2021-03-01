import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to='/mountain'>mountain</NavLink></li>
        <li><NavLink to='/forest'>forest</NavLink></li>
        <li><NavLink to='/beach'>beach</NavLink></li>
      </ul>
    </nav>
  )
}

export default Nav;
