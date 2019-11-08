import React from 'react';
import './about.css'

const About = (props) => {

  return (
    <div className="aboutContainer">
      <div className="timestamp">Today {props.getTime}</div>

      <div className="aboutLetterWrap">
        <h2 className="aboutLetter">What is he About?</h2>
      </div>
      <div className="speechTest">
        <div className="aboutMeWrap">
          <p className="aboutText">Darrin Im is a Software Engineer who <span className="lovesText">loves</span> collaborating with others to inject personality and creativity into each and every project. Highly skilled at drinking too much coffee 😂</p>
        </div>
      </div>
      <div>
      <img
          className="bitmojiAbout"
          src="https://res.cloudinary.com/darrin-im/image/upload/v1573189170/bitmojiAbout2_arsdlb.jpg"
      />
      </div>


    </div>
  )
}


export default About;
