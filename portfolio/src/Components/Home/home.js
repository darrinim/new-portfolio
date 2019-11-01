import React from 'react';
import './home.css'
import { Link, animateScroll as scroll } from "react-scroll";

const Home = () => {

  return (
    <div className="container">
      <div className="half homeLeft">
        <img className="bitmojiHome" src="https://res.cloudinary.com/darrin-im/image/upload/v1572289016/bitmojiHome2_qe3jzs.png" />
        {/*<h2 className="word hi">Hi<span className="word italicHome">!</span></h2>*/}
        <h2 className="word nameFirst">Darrin</h2>
        <h2 className="word nameLast">Im</h2>
        <h2 className="word jobTitleL">Software</h2>
        <h2 className="word jobTitleR">Engineer</h2>
      </div>
      <div className="scrollToContainer">
        <Link
          activeClass="active"
          to="aboutContainer"
          spy={true}
          smooth={true}
          offset={-70}
          duration= {500}
        >
          <p className="linkScrollTo linkAbout">About<i class="fas fa-long-arrow-alt-down"></i></p>
        </Link>

        <Link
          activeClass="active"
          to="footerContainer"
          spy={true}
          smooth={true}
          offset={-70}
          duration= {500}
        >
          <p className="linkScrollTo linkContact testStyle">Contact<i class="fas fa-long-arrow-alt-down"></i></p>
        </Link>

        <Link
          activeClass="active"
          to="projectContainerFull"
          spy={true}
          smooth={true}
          offset={-70}
          duration= {500}
        >
          <p className="linkScrollTo linkProjects">Projects<i class="fas fa-long-arrow-alt-down"></i></p>
        </Link>
      </div>
    </div>
  )
}


export default Home;
