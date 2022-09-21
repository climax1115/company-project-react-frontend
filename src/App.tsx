import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layouts from './layouts';
import { MainRouter } from './routes';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        ssdaf
      </header> */}
      <BrowserRouter>
      <Layouts>
        <MainRouter/>
      </Layouts>
      </BrowserRouter>
    </div>
  );
}

export default App;
