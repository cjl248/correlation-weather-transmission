import React from 'react';
import HeaderContainer from './containers/HeaderContainer.jsx'
import MainDateContainer from './containers/MainDateContainer.jsx'
import MainGraphContainer from './containers/MainGraphContainer.jsx'
import './App.scss';

export default class App extends React.Component {

  state = {
    activePage: 'dates'
  }

  renderMain = () => {
    if (this.state.activePage === 'dates') {
      return (<MainDateContainer></MainDateContainer>)
    }
    if (this.state.activePage === 'graphs') {
      return (<MainGraphContainer></MainGraphContainer>)
    }
  }

  render() {
    return (
      <div className="App">
        <HeaderContainer></HeaderContainer>
        {this.renderMain()}
      </div>
    )
  }
}
