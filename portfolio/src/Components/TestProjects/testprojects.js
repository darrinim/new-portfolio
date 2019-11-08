// BELOW IS THE INSIDE OF THE RETURN FROM PROJECTS

<div className="projectContainer">
    <div className="projectTestContainer"> {/* start of projectInner container */}
      <div className="projectFront">
        <img
          className="projectPhotos"
          src={d.image} />
      </div> {/* end of projectFront */}
      <div className="projectBack">
        <ul className="projectList">
          <li className="text projectTitle">{d.title}</li>
          <li className="text projectDesc">{d.description}</li>
          <li className="text"><a className="projectLink" target="blank"  href={d.deployed}>See this project!</a></li>
          {d.mockup !== "" ? <li className="text projectMockup"><a className="projectLink" target="blank"  href={d.mockup}>Mockup</a></li> : null}
        </ul>
      </div> {/* end of projectBack*/}
    </div> {/* end of inner container */}
</div>
