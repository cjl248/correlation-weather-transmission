import React from 'react'

export default class DateCard extends React.Component {

  render() {
    const { date, dateInfo } = this.props
    // console.log(dateInfo)
    return (
      <div className={"date-card"}>
        <h2>{date}</h2>
        <p>{`New Cases: ${dateInfo.new_daily_cases}`}</p>
        <p>{`New Deaths: ${dateInfo.new_daily_deaths}`}</p>
      </div>
    )
  }

}
