import React from 'react'
import DateCard from '../components/DateCard.js'
import { v4 as uuidv4 } from 'uuid'

export default class DateCardContainer extends React.Component {

  renderDateInfo = () => {
    const { dateInfo, setActiveDateCard } = this.props
    if (dateInfo) {
      return dateInfo.map((date, index, array) => {
        const currentDate = date.date
        const totalCases = date.total_cases
        const totalDeaths = date.total_deaths
        let newCases = 0
        let newDeaths = 0
        if (index > 0) {
          newCases = totalCases - array[index-1].total_cases
          newDeaths = totalDeaths - array[index-1].total_deaths
        }
        return (
          <DateCard
            key={uuidv4()}
            date={currentDate}
            newCases={newCases}
            newDeaths={newDeaths}
            totalCases={totalCases}
            totalDeaths={totalDeaths}
            setActiveDateCard={setActiveDateCard}>
          </DateCard>
        )
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
