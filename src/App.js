import React from 'react';
import HeaderBar from './components/HeaderBar.js'
import Main from './containers/Main.js'
import './App.scss';

export default function App() {

  return (
    <div className="App">
      <HeaderBar></HeaderBar>
      <Main></Main>
    </div>
  )
}
