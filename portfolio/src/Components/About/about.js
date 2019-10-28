import React from 'react';
import './about.css'

const About = () => {

  return (
    <div className="aboutContainer">
      <div className="aboutLetterWrap">
        <h2 className="aboutLetter">AB</h2>
        <h2 className="aboutLetter">OUT</h2>
      </div>
      <div className="aboutMeWrap">
        <p className="aboutText">I am a Software Engineer who <span className="lovesText">loves</span> collaborating with others to inject personality into otherwise dull projects. Highly skilled at drinking too much coffee.</p>
      </div>
      <img
        className="bitmojiAbout"
        src="https://res.cloudinary.com/darrin-im/image/upload/v1572286653/bitmojiAbout2_xclhhu.jpg" />
    </div>
  )
}


export default About;
