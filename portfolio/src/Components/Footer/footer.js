import React from 'react';
import './footer.css'

const Footer = () => {

  return (
    <div className="footerContainer">
      <h2 className="footerHeadline">Let's accomplish something great</h2>
      <p className="footerSubtext">lorem ipsum about things that I can do and how we can collaborate and yadda yadda yaddaaaa</p>
      <div className="contactContainer">
        <img className="bitmojiFooter" src="https://res.cloudinary.com/darrin-im/image/upload/v1572281160/bitmoji-peek_uhxkd7.png" />
      <button className="contactButton">get in touch</button>
      </div>
      <div className="contactFooterLinks">
        <a target= "blank" href="https://www.linkedin.com/in/darrin-im/"><i class="fab fa-linkedin fa-1x"></i></a>
        <a target= "blank" href="https://github.com/darrinim"><i class="fab fa-github-square fa-1x"></i></a>
        <a><i class="fas fa-envelope fa-1x"></i></a>
        <a><i class="fas fa-file fa-1x"></i></a>
      </div>
    </div>
  )
}


export default Footer;
