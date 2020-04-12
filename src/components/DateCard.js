import React from 'react'

export default class DateCard extends React.Component {

  render() {
    return <p>{this.props.dateInfo.new_daily_cases}</p>
  }

}
