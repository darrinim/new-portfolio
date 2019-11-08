import React from 'react';
import './languages.css'

const Languages = () => {


  return (
    <div className="langContainer">
      <div className="langQuestWrap">
        <h2 className="aboutLetter">What are his Skills?</h2>
      </div>
      <div className="langAnsWrap">
      <div className="langAnsOutterWrap"> {/* FOR PUSHING SPEECH BUBBLE RIGHT */}
        <div className="langAnsInnerWrap">
          <p className="aboutText">
          <div className="iconContainer">
            <img className="langIcon" src="https://res.cloudinary.com/darrin-im/image/upload/v1573064676/html_o0ndiu.svg"/>
            <img className="langIcon" src="https://res.cloudinary.com/darrin-im/image/upload/v1573064913/css_bp6oc3.svg"/>
            <img className="langIcon" src="https://res.cloudinary.com/darrin-im/image/upload/v1573064938/js_uu6pej.svg"/>
            <img className="langIcon" src="https://res.cloudinary.com/darrin-im/image/upload/v1573064940/react_xsnzmz.svg"/>
            <img className="langIcon" src="https://res.cloudinary.com/darrin-im/image/upload/v1573064938/express_blimkr.svg"/>
            <img className="langIcon" src="https://res.cloudinary.com/darrin-im/image/upload/v1573064938/nodejs_wgod3w.svg"/>
            <img className="langIcon" src="https://res.cloudinary.com/darrin-im/image/upload/v1573064940/sequelize_lntyrk.svg"/>
            <img className="langIcon" src="https://res.cloudinary.com/darrin-im/image/upload/v1573064940/ruby_yrv3eu.svg"/>
            <img className="langIcon" src="https://res.cloudinary.com/darrin-im/image/upload/v1573064940/rails_iuf6q0.svg"/>
            <img className="langIcon" src="https://res.cloudinary.com/darrin-im/image/upload/v1573064939/postgresql_dufcl3.svg"/>
            <img className="langIcon" src="https://res.cloudinary.com/darrin-im/image/upload/v1573064938/heroku_ybjluj.svg"/>
          </div>
          </p>
        </div>
      </div>
        <div className="bitmojiLangContainer">
          <img className="bitmojiLang" src="https://res.cloudinary.com/darrin-im/image/upload/v1573077950/bitmojiLang2_kc2ox2.jpg" />
        </div>
      </div>

    </div>
  )
}



export default Languages;
