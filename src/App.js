import React from 'react';
import Sidenav from './pages/home/components/sidenav.js';
import './App.css';
import 'rsuite/dist/styles/rsuite-dark.css'

function App() {
  return (
    <div className="App">
      <Sidenav activekey='home'/>
    </div>
  );
}

export default App;
