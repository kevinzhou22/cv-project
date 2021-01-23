import React from 'react';
import EditableInput from './Editable-Input';
import EditableTextarea from './Editable-Textarea';

function WorkExperienceEntry(props) {

    const edit = props.edit === undefined ? false : props.edit;

    return (
      <div className="work-experience-entry">
        <div className="top-row-container">
          <EditableInput edit={edit} className="field company" text="Company Name" />
          <EditableInput edit={edit} className="field date" text="Start Date - End Date" />
        </div>
        <div className="second-row-container">
          <EditableInput edit={edit} className="field position" text="Position"></EditableInput>
        </div>
        <div className="third-row-container">
          <EditableTextarea edit={edit} className="field description" text="Description"/>
        </div>
      </div>
    );
}

export default WorkExperienceEntry;
