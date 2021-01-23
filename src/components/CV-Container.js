import React from 'react';
import GeneralInformation from './General-Information';
import WorkExperience from './Work-Experience';
import Education from './Education';

function CVContainer(props) {
  return (
    <div className={`cv-container${props.className ? ` ${props.className}` : ''}`}>
      <div className="left-side">
        <GeneralInformation />
      </div>
      <div className="right-side">
        <WorkExperience />
        <Education />
      </div>
    </div>
  );
}

export default CVContainer;
