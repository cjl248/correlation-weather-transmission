import React from 'react'
import DateCard from '../components/DateCard.js'

export default class DateCardContainer extends React.Component {

  renderDateInfo = () => {
    const { dates } = this.props
    if (dates) {
      const dateKeys = Object.keys(dates)
      return dateKeys.map((dateKey) => {
        const dateInfo = dates[dateKey]
        // console.log("dateInfo: ", dateInfo)
        return ( <DateCard key={dateKey} date={dateKey} dateInfo={dateInfo}></DateCard> )
      })
    }
  }

  render() {
    return (
      <div className={"date-card-container"}>
        {this.renderDateInfo()}
      </div>
    )
  }

}
