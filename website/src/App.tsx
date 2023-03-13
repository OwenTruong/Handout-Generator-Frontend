import React from 'react';

// import { ConfirmationPanel } from 'components/ConfirmationPanel';
// import { CreatePDFPanel } from 'components/CreatePDFPanel';
// import { CustomizeTemplatePanel } from 'components/CustomizeTemplatePanel';
// import { Guide } from 'components/Guide';
import { LoginPanel } from 'components/LoginPanel';

function App(): JSX.Element {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <LoginPanel />
    </div>
  );
}

export default App;
