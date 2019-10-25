import React from 'react';
import './home.css'

const Home = () => {

  return (
    <div className="container">
      <div className="half homeLeft">
        <img className="bitmojiHome" src="https://res.cloudinary.com/darrin-im/image/upload/v1571943986/bitmojiport_e09uaf.jpg" />
        <h2 className="word hi">Hi<span className="word italicHome">!</span></h2>
        <h2 className="word nameFirst">Darrin</h2>
        <h2 className="word nameLast">Im</h2>
        <h2 className="word jobTitleL">Software</h2>
        <h2 className="word jobTitleR">Engineer<span className="periodHome">.</span></h2>
      </div>
    </div>
  )
}


export default Home;
