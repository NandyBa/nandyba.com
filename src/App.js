import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Formations from './page/Formations/Formations';
import FormationLinkedIn from './page/Formations/LinkedIn';
import FormationGitHub from './page/Formations/GitHub';
import './App.css';

const App = () => {

  return(
    <BrowserRouter>
      <Routes>
        <Route path="">
          {/* <Route path=":lang">
            <Route path="" element={<Home />}/>
            <Route path="pre-registration" element={<PreRegistration/>} />
          </Route> */}
          <Route path="" element={<Home />}/>
          <Route path="formations" element={<Formations />} />
          <Route path="formations/LinkedIn" element={<FormationLinkedIn />} />
          <Route path="formations/GitHub" element={<FormationGitHub />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
