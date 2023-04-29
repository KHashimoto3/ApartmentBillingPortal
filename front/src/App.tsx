import React from 'react';
import { Routes, Route } from 'react-router-dom';

import {User} from './components/User';
import {Manage} from './components/Manage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/manage" element={<Manage />} />
      </Routes>
    </div>
  );
}

export default App;
