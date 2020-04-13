import React from 'react'

export default class DateCard extends React.Component {

  render() {
    const { date, dateInfo } = this.props
    return (
      <div className={"date-card"}>
        <h3>{date}</h3>
        <p>{dateInfo.new_daily_cases}</p>
      </div>
    )
  }

}
