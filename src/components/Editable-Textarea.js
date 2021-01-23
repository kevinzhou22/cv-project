import React, { useState } from 'react';

/* Wrap around inputs or textareas to make them editable
State is not handled by either Editable or the child
input / textarea. */
function EditableInput(props) {

  const [isEditing, setIsEditing] = useState(props.edit === undefined ? false : props.edit);
  const [value, setValue] = useState(props.text);

  let handleKeyDown = function handleKeyDown(e) {
    if (e.key === "Escape") {
      setIsEditing(false);
      return;
    }
  };
  handleKeyDown = handleKeyDown.bind(this);

  let handleChangeInput = function handleChangeInput(e) {
    const inputValue = e.target.value;
    setValue(inputValue);
  };
  handleChangeInput = handleChangeInput.bind(this);


  let displayedContent;

  if (isEditing) {
    displayedContent = (
      <div
        onBlur={() => setIsEditing(false)}
        onKeyDown={(e) => handleKeyDown(e)}
      >
        <textarea type="text" value={value} onChange={handleChangeInput}></textarea>
      </div>
    );
  } else {
    displayedContent = (
      <div onClick={() => setIsEditing(true)}>
        <span>{value}</span>
      </div>
    );
  }

  return (
    <div className={`editable-textarea ${props.className ? ` ${props.className}` : ''}`}>
      {displayedContent}
    </div>
  );


}

export default EditableInput;
