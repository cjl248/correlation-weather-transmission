import React from 'react'

export default class DateCard extends React.Component {

  render() {
    const { date, dateInfo, setActiveDateCard } = this.props
    return (
      <div className={"date-card"} onClick={() => {setActiveDateCard(date, dateInfo)}}>
        <h2>{date}</h2>
        <p>{`New Cases: ${dateInfo.new_daily_cases}`}</p>
        <p>{`New Deaths: ${dateInfo.new_daily_deaths}`}</p>
      </div>
    )
  }

}
