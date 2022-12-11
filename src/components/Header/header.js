import React from 'react';
import images from '../../asset/images';

import SubHeading from '../subHeading';
import './header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Be Part of my Journey"/>
      <h1 className='app__header-h1'>The Key to Fine Cocktails</h1>
      <p className="p__opensans" style={ {margin: '2rem 0'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque reiciendis ducimus ex eum temporibus saepe minima laborum maiores nihil nisi libero, illo dolorem, ipsum culpa dignissimos amet suscipit, optio iste?</p>
      <a href='../gallery'><buttom type="button" className="custom__button">Explore Gallery</buttom></a>
    </div>

    <div className='app__wrapper_img'>
      <img src={ images.mainPhoto } alt="header img"/>
    </div>
  </div>
);

export default Header;
