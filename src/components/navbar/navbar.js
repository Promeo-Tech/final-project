
import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiDrink } from 'react-icons/bi';

import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return(


  <nav className="app__navbar">
    <div className="app__navbar-logo">
      <p className='p__opensans' id='logo'>Vegas Bar Man</p>
    </div>
  <ul className="app__navbar-links">
    <li className="p__opensans"><a href="/">Home</a></li>
    <li className="p__opensans"><a href="/about-us">About Me</a></li>
    <li className="p__opensans"><a href="/gallery">Gallery</a></li>
    <li className="p__opensans"><a href="/create-drink">Make a Drink</a></li>
    </ul>
    <div className="app__navbar-smallscreen-link">
      <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)}/>

    {toggleMenu && (
    
    <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
      <BiDrink fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="/home">Home</a></li>
        <li className="p__opensans"><a href="/about-us">About Me</a></li>
        <li className="p__opensans"><a href="/gallery">Gallery</a></li>
        <li className="p__opensans"><a href="/create-drink">Make a Drink</a></li>
      </ul>
    </div>
    )}

    </div>

  </nav>
);


}

export default Navbar;