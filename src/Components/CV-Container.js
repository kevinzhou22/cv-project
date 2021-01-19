import React from 'react';

class CVContainer extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className={`cv-container${this.props.className ? ` ${this.props.className}` : ''}`}>
        <div className="left-side">
        <div className="placeholder1"></div>
        </div>
        <div className="right-side">
          <div className="placeholder2"></div>
          <div className="placeholder3"></div>
        </div>
      </div>
    );
  }
}

export default CVContainer;
