import React from 'react';

export default class extends React.Component {

  renderDetails = () => {
    if (this.props.card) {
      return (
        <>
          <p>{`Date: ${this.props.card[0]}`}</p>
          <p>{`New Daily Cases: ${this.props.card[1]}`}</p>
          <p>{`New Daily Deaths: ${this.props.card[2]}`}</p>
          <p>{`Total Daily Cases: ${this.props.card[3]}`}</p>
          <p>{`Total Daily Deaths: ${null}`}</p>
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
