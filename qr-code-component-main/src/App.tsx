import React from 'react';
import './styles/app.css';
import QRCode from './components/QRCode';

const App: React.FC = () => {
  return (
    <div className="App outfit">
      <QRCode />
    </div>
  );
}

export default App;
