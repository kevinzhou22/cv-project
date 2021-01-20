import React from 'react';
import GeneralInformation from './General-Information';
import WorkExperience from './Work-Experience';

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
          <div className="placeholder3"></div>
        </div>
      </div>
    );
  }
}

export default CVContainer;
