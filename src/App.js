import React from 'react';
import ClassComponent from './ClassComponent';
import FuncComponent from './FuncComponent';
import PureClassComponent from './PureClassComponent';
import CreateElementReact from './CreateElementReact';

function App() {
  return (
    <div className="App">
      <CreateElementReact />
      <ClassComponent />
      <PureClassComponent />
      <FuncComponent />
    </div>
  );
}

export default App;
