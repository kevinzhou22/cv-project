import React, { useState } from 'react';
import EducationEntry from './Education-Entry';
import uniqid from 'uniqid';

function Education() {

  const [keys, setKeys] = useState([]);


  let handleAddEntry = function handleAddEntry() {
    setKeys((prevKeys) => {
      return (
        [...prevKeys, uniqid()]
      );
    });
  };
  handleAddEntry = handleAddEntry.bind(this);

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
        <button type="button" className="add-education" onClick={handleAddEntry}>+ Education</button>
      </div>
    </div>

  );


}

export default Education;