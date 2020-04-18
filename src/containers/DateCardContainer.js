import React from 'react'
import DateCard from '../components/DateCard.js'
import { v4 as uuidv4 } from 'uuid'

export default class DateCardContainer extends React.Component {

  renderDateInfo = () => {
    const { dateInfo, setActiveDateCard } = this.props
    if (dateInfo) {
      return dateInfo.map((date) => {
        const currentDate = date.date
        const newCases = date.new_cases
        const newDeaths = date.new_deaths
        return ( <DateCard
                    key={uuidv4()}
                    date={currentDate}
                    newCases={newCases}
                    newDeaths={newDeaths}
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
