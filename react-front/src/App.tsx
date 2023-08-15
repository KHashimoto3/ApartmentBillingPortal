import { Route, Routes } from 'react-router-dom';

import { User } from './components/user/User';
import { Manage } from './components/manage/Manage';

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
