import React from 'react';

export default class HeaderContainer extends React.Component {

  render() {
    return (
      <div className={"header-bar"}>
        <h1>{"SARS-CoV-2 Transmission & Weather"}</h1>
        <h2>{`New York State`}</h2>
      </div>
    )
  }

}
