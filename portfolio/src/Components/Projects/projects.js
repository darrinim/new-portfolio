import React from 'react';
import './projects.css';

const Projects = (props) => {

  return (
    <div className="projectContainerFull">
      <div className="aboutLetterWrap aboutWrap">
        <h2 className="aboutLetter">Projects?</h2>
      </div>
      {props.projects && props.projects.map( d => {
        return (
          <div className="projectContainer">
            <img
              className="projectPhotos"
              src={d.image} />
              <ul className="projectList">
                <li className="text projectTitle">{d.title}</li>
                <li className="text projectDesc">{d.description}</li>
                <li className="text projectLink">{d.languages}</li>
              </ul>
          </div>
        )
      })}
    </div>
  )
}


export default Projects;
