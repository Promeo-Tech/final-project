import React from 'react';
import images from '../asset/images';



const SubHeading = ({ title }) => (
  <div style={{marginBottom: '2rem', color: 'white'}}> 
   <p className='o__cormorant'>{title}</p>
    <img src={images.drink} alt="drink" className="spoon__img" style={{height: '35px'}}/>
  </div>
);

export default SubHeading;