import React from 'react';
import EditableInput from './Editable-Input';
import EditableTextarea from './Editable-Textarea';

class EducationEntry extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    const edit = this.props.edit === undefined ? false : this.props.edit;

    return (
      <div className="education-entry">
        <div className="top-row-container">
          <EditableInput edit={edit} className="field school" text="School Name" />
          <EditableInput edit={edit} className="field date" text="Start Date - End Date" />
        </div>
        <div className="second-row-container">
          <EditableInput edit={edit} className="field degree" text="Degree"></EditableInput>
        </div>
        <div className="third-row-container">
          <EditableTextarea edit={edit} className="field description" text="Description"/>
        </div>
      </div>
    );
  }
}

export default EducationEntry;
