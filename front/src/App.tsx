import React from 'react';
import { Routes, Route } from 'react-router-dom';

import {UserHome} from './components/UserHome';
import {ManageHome} from './components/ManageHome';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Routes>
        <Route path="/" element={<UserHome />} />
        <Route path="/manage" element={<ManageHome />} />
      </Routes>
    </div>
  );
}

export default App;
