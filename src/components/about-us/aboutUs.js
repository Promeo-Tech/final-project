import React from 'react';
import images from '../../asset/images';

import './aboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Me</h1>
        <img src={images.drink} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
      </div>

      <div className="app__aboutus-image flex__center">
        <img src={images.aboutus} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">My History</h1>
        <img src={images.drink} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
      </div>
    </div>
  </div>
);

export default AboutUs;