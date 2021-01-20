import React from 'react';
import CVContainer from './components/CV-Container';
import './reset.css';
import './style.css';
import '@fortawesome/fontawesome-free/css/solid.min.css';
import '@fortawesome/fontawesome-free/css/fontawesome.css';

function App() {
  return (
   <div className="app">
     <i className="fas fa-briefcase"></i>
     <h1>CV Builder</h1>
    <CVContainer className=''/>
   </div>
  );
}

export default App;
