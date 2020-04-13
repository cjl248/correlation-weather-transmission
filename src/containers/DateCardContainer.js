import React from 'react'
import DateCard from '../components/DateCard.js'

export default class DateCardContainer extends React.Component {

  renderDateInfo = () => {
    const { caseInfo, setActiveDateCard } = this.props
    if (caseInfo) {
      const dateKeys = Object.keys(caseInfo)
      dateKeys.pop()
      return dateKeys.map((dateKey) => {
        const dateInfo = caseInfo[dateKey]
        return ( <DateCard
                    key={dateKey}
                    date={dateKey}
                    dateInfo={dateInfo}
                    setActiveDateCard={setActiveDateCard}>
                  </DateCard> )
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
