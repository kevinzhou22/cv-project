import React from 'react';
import GeneralInformation from './General-Information';
import WorkExperience from './Work-Experience';
import Education from './Education';

class CVContainer extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className={`cv-container${this.props.className ? ` ${this.props.className}` : ''}`}>
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
}

export default CVContainer;
