import { Route, Routes } from 'react-router-dom';

import 'styles/App.css';
import only from 'assets/img/ONLY.png';
import { PATH } from 'enums';
import { Login, Profile } from 'pages';
import { ReturnComponentType } from 'types';

const App = (): ReturnComponentType => (
  <div className="App">
    <img className="img" src={only} alt="only" />
    <Routes>
      <Route path={PATH.LOGIN} element={<Login />} />
      <Route path={PATH.PROFILE} element={<Profile />} />
    </Routes>
  </div>
);

export default App;
