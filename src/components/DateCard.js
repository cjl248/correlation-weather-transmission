import React from 'react'

export default class DateCard extends React.Component {

  formatDate = () => {
    const fullDate = this.props.date
    const dateArray = fullDate.split("T")
    return dateArray[0]
  }

  render() {
    const {newCases, totalCases, totalDeaths, newDeaths, setActiveDateCard } = this.props
    return (
      <div className={"date-card"} onClick={() => {setActiveDateCard(this.formatDate(), newCases, newDeaths, totalCases, totalDeaths)}}>
        <h2>{this.formatDate()}</h2>
        <p>{`New Cases: ${newCases}`}</p>
        <p>{`New Deaths: ${newDeaths}`}</p>
      </div>
    )
  }

}
