import React from 'react';
import './about.css'

const About = () => {

  return (
    <div className="aboutContainer">
      <div className="aboutLetterWrap">
        <h2 className="aboutLetter">Who are you?</h2>
        {/*<h2 className="aboutLetter">OUT</h2>*/}
      </div>
      <div className="speechTest"> { /*TEST FOR SPEECH POSITION*/}
      <div className="aboutMeWrap">
        <p className="aboutText">I am a Software Engineer who <span className="lovesText">loves</span> collaborating with others to inject personality into each and every project. Highly skilled at drinking too much coffee.</p>
      </div>
      </div> { /*TEST FOR SPEECH POSITION*/}
      <img
              className="bitmojiAbout"
              src="https://res.cloudinary.com/darrin-im/image/upload/v1572286653/bitmojiAbout2_xclhhu.jpg" />
{/*      <img
        className="bitmojiAbout"
        src="https://res.cloudinary.com/darrin-im/image/upload/v1572286653/bitmojiAbout2_xclhhu.jpg" /> */}
        
    </div>
  )
}


export default About;
