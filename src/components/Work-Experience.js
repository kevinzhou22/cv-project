import React, { useState } from 'react';
import WorkExperienceEntry from './Work-Experience-Entry';
import uniqid from 'uniqid';

function WorkExperience() {
  const [keys, setKeys] = useState([]);


  let handleAddEntry = function handleAddEntry() {
    setKeys((prevKeys) => {
        return [...prevKeys, uniqid()]
    });
  };
  handleAddEntry = handleAddEntry.bind(this);

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
        <button type="button" className="add-work-experience" onClick={handleAddEntry}>+ Work Experience</button>
      </div>
    </div>

  );


}

export default WorkExperience;
