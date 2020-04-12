import React from 'react'

export default class DateCard extends React.Component {

  render() {
    return (
      <div className={"date-card"}>
        <h3>{this.props.date}</h3>
        <p>{this.props.dateInfo.new_daily_cases}</p>
      </div>
    )
  }

}
