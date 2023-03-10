import React from 'react';
// import { Route, Routes, Navigate } from 'react-router-dom';

import { ConfirmationPanel } from 'components/ConfirmationPanel';
import { CreatePDFPanel } from 'components/CreatePDFPanel';
import { CustomizeTemplatePanel } from 'components/CustomizeTemplatePanel';
import { Guide } from 'components/Guide';
import { Login } from 'components/Login';
import { NavBar } from 'components/NavBar';

function App(): JSX.Element {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <NavBar />
      <Login />
    </div>
  );
}

export default App;
