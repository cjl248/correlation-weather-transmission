import React from 'react'
import DateCard from '../components/DateCard.js'
import { v4 as uuidv4 } from 'uuid'

// import bootstrap components
import Card from 'react-bootstrap/Card'

export default class DateCardContainer extends React.Component {

  renderDateInfo = () => {
    const { dateInfo, setActiveDateCard } = this.props
    if (dateInfo) {
      return dateInfo.map((date, array) => {
        const newTests = date.new_tests
        const currentDate = date.date
        const newPositives = date.new_positives
        const totalPositives = date.total_positives
        const newDeaths = date.new_deaths
        const totalDeaths = date.total_deaths

        const dateInfo = {
          newTests,
          currentDate,
          newPositives,
          totalPositives,
          newDeaths,
          totalDeaths
        }

        return (
          <DateCard
            key={uuidv4()}
            dateInfo={dateInfo}
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
