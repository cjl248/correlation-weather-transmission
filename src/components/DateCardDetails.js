import React from 'react';

export default class extends React.Component {

  renderDetails = () => {
    if (this.props.card) {
      return (
        <>
          <p>{`Date: ${this.props.card.date}`}</p>
          <p>{`New Cases: ${this.props.card.newPositives}`}</p>
          <p>{`New Deaths: ${this.props.card.newDeaths}`}</p>
          <p>{`Total Cases: ${this.props.card.totalPositives}`}</p>
          <p>{`Total Deaths: ${this.props.card.totalDeaths}`}</p>
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
