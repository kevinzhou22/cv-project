import React from 'react';
import EditableInput from './Editable-Input';

function GeneralInformation() {
  
  return (
    <div className="general-information">
      <div className="name">
        <EditableInput text="First Name" />
        <EditableInput text="Last Name" />
      </div>        <div className="field address-line-1">
        <i className="fas fa-map-marker-alt"></i>
        <EditableInput text="Address Line 1" />
      </div>
      <div className="field address-line-2">
        <span className="spacing"></span>
        <EditableInput text="Address Line 2" />
      </div>
      <div className="field phone">
        <i className="fas fa-phone"></i>
        <EditableInput text="Phone Number" />
      </div>
      <div className="field email">
        <i className="fas fa-envelope"></i>
        <EditableInput text="Email" />
      </div>
    </div>
  );

}

export default GeneralInformation;
