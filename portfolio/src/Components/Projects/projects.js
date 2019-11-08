import React from 'react';
import './projects.css';

const Projects = (props) => {

  return (
    <div className="projectOuterContainer">
    <div className="aboutLetterWrap aboutWrap">
      <h2 className="aboutLetter">Projects?</h2>
    </div>
    <div className="projectContainerFull">


      {props.projects && props.projects.map( d => {
        return (
          <div className="proContainer">
            <img
              className="projectPhotos"
              src={d.image}/>
            <div className="innerProContainer">

            <a className="proLink" target="blank" href={d.deployed}>
              <div className="innerProWrap">
                <ul className="proList">
                  <li className="proListItem">{d.title} - {d.description}</li>
                  <li className="proListItem proLinks">{d.deployed}</li>
                </ul>
                <i class="fas fa-chevron-right arrow"></i>
              </div>
            </a>


            </div>
          </div>
        )
      })}
    </div>
    </div>
  )
}



export default Projects;
