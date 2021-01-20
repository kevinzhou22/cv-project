import React from 'react';
import WorkExperienceEntry from './Work-Experience-Entry';
import uniqid from 'uniqid';

class WorkExperience extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddEntry = this.handleAddEntry.bind(this);
    this.state = {
      keys: [],
    }
  }

  handleAddEntry() {
    this.setState((state) => {
      return ({
        keys: [...state.keys, uniqid() ]
      });
    });
  }

  render() {
    const { keys } = this.state;
    const workExperienceEntries = keys.map((key) => {
      return (
        <WorkExperienceEntry key={key} edit={true} />
      );
    });

    return (
      <div className="work-experience">
        <h3>Work Experience</h3>
        <div className="work-experience-entries-container">
          {workExperienceEntries}
        </div>
        <div className="add-work-experience-container">
          <button type="button" className="add-work-experience" onClick={this.handleAddEntry}>+ Work Experience</button>
        </div>
      </div>

    );
  }

}

export default WorkExperience;
