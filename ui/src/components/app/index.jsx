import React, { useState } from 'react';
import logo from './haus-logo.png';
import './app.css';

import PanelNew from '../new';
import PanelExisting from '../existing';

const App = () => {
  const [currentPanel, setCurrentPanel] = useState('existing');

  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
      </header>
      <section className="selection">
        <button onClick={() => setCurrentPanel('existing')} type="button">Show existing real estates</button>
        <div>or</div>
        <button onClick={() => setCurrentPanel('new')} type="button">Add new real estate</button>
      </section>
      <section className="main">
        {currentPanel === 'existing' && <PanelExisting />}
        {currentPanel === 'new' && <PanelNew />}
      </section>
    </div>
  );
};

export default App;
