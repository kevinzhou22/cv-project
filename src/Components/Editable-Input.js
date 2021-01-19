import React from 'react';

/* Wrap around inputs or textareas to make them editable
State is not handled by either Editable or the child
input / textarea. */
class EditableInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      value: props.text,
    }
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.setEditing = this.setEditing.bind(this)
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  handleKeyDown(e) {
    if (e.key === "Enter" || e.key === "Escape") {
      this.setEditing(false);
      return;
    }
  }

  handleChangeInput(e) {
    const inputValue = e.target.value;
    this.setState({ value: inputValue })
  }

  setEditing(bool) {
    this.setState({ isEditing: bool });
  }

  render() {
    const value = this.state.value;

    let displayedContent;
    
    if (this.state.isEditing) {
      displayedContent = (
        <div
          onBlur={() => this.setEditing(false)}
          onKeyDown={ (e) => this.handleKeyDown(e)}  
        >
          <input type="text" value={value} onChange={this.handleChangeInput}></input>
        </div>
      );
    } else {
      displayedContent = (
        <div onClick={() => this.setEditing(true)}>
          <span>{ value }</span>
        </div>
      );
    }

    return (
      <div className={`editable-input ${this.props.className ? ` ${this.props.className}` : ''}`}>
        {displayedContent}
      </div>
    );
  }

}

export default EditableInput;
