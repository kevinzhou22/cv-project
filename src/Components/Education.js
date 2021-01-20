import React from 'react';
import EducationEntry from './Education-Entry';
import uniqid from 'uniqid';

class Education extends React.Component {
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
    const educationEntries = keys.map((key) => {
      return (
        <EducationEntry key={key} edit={true} />
      );
    });

    return (
      <div className="education">
        <h3>Education</h3>
        <div className="education-entries-container">
          {educationEntries}
        </div>
        <div className="add-education-container">
          <button type="button" className="add-education" onClick={this.handleAddEntry}>+ Education</button>
        </div>
      </div>

    );
  }

}

export default Education;