import React from 'react';

export default class extends React.Component {

  renderDetails = () => {
    if (this.props.card) {
      return (
        <>
          <h2>{`Date: ${this.props.card[0]}`}</h2>
          <p>{`New Daily Cases: ${this.props.card[1]}`}</p>
          <p>{`New Daily Deaths: ${this.props.card[2]}`}</p>
        </> 
      )
    } else {
      return (<h2>{"CLICK A CARD TO SHOW DETAILS"}</h2>)
    }
  }

  render() {
    return (
      <div className="card-details">
        {this.renderDetails()}
      </div>
    )

  }

}
