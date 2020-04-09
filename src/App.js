import React from 'react';
import ReactDOM from 'react-dom';
import HeaderBar from './components/HeaderBar.js'
import Main from './containers/Main.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <HeaderBar></HeaderBar>
      <Main></Main>
    </div>
  );
}

export default App;
