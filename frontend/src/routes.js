


// AppRouter.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Homepage from './Homepage';
// import Login from './components/Login';
// import Signup from './components/Signup';

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './homePage';
import Login from './components/login';
import Signup from './components/signup';
import Onboarding from './components/onboarding';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route exact path="/" element={<Homepage/>} />
      <Route exact path="/onboarding" element={<Onboarding/>} />
    </Routes>
  );
};

export default AppRouter;