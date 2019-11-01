import React from 'react';
import './footer.css'

const Footer = () => {

  return (
    <div className="footerContainer">
      <h2 className="footerHeadline">Let's accomplish something great</h2>
      <p className="footerSubtext">Would you like to work together? I would too! Shoot me a message detailing what you are looking for and I will be sure to get in touch with you.</p>
      <p className="footerSubtext">Let's connect professionally. Give me a follow on LinkedIn below!</p>
      <div className="contactContainer">
        <img className="bitmojiFooter" src="https://res.cloudinary.com/darrin-im/image/upload/v1572408505/bitmoji-peek_bartez.png" />
        <a className="button contactLink" href="mailto:darrinj.im@gmail.com">get in touch</a>
      </div>
      <div className="contactFooterLinks">
        <a className="contactIcon" target= "blank" href="https://www.linkedin.com/in/darrin-im/"><i class="fab fa-linkedin fa-1x"></i></a>
        <a className="contactIcon" target= "blank" href="https://github.com/darrinim"><i class="fab fa-github-square fa-1x"></i></a>
        <a className="contactIcon" target = "blank" href="mailto:darrinj.im@gmail.com"><i class="fas fa-envelope fa-1x"></i></a>
        <a className="contactIcon" target = "blank" href="https://pdfhost.io/v/2X3sljwd4_ResumenewfinalPDF.pdf"><i class="fas fa-file fa-1x"></i></a>
      </div>
    </div>
  )
}


export default Footer;
