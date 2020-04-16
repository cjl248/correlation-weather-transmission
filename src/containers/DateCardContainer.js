import React from 'react'
import DateCard from '../components/DateCard.js'

export default class DateCardContainer extends React.Component {

  renderDateInfo = () => {
    const { caseInfo, setActiveDateCard } = this.props
    if (caseInfo) {
      const confirmedCases = caseInfo.confirmed
      const deathCases = caseInfo.deaths
      const dateKeys = Object.keys(confirmedCases.timeline)
      return dateKeys.map((dateKey) => {
        const confirmed = confirmedCases.timeline[dateKey]
        const deaths = deathCases.timeline[dateKey]
        return ( <DateCard
                    key={dateKey}
                    date={dateKey}
                    confirmed={confirmed}
                    deaths={deaths}
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
