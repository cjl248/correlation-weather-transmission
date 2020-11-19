import React from 'react'
import DateCard from '../components/DateCard.js'
import { v4 as uuidv4 } from 'uuid'

export default class DateCardContainer extends React.Component {

  renderDateInfo = () => {
    const { dateInfo, setActiveDateCard } = this.props
    if (dateInfo) {
      return dateInfo.map((date, array) => {
        const currentDate = date.date
        const newTests = date.new_tests
        const newPositives = date.new_positives
        const totalPositives = date.total_positives
        const newHospitalizations = date.new_hospitalizations
        const totalHospitalizations = date.total_hospitalizations
        const newDeaths = date.new_deaths
        const totalDeaths = date.total_deaths

        return (
          <DateCard
            key={uuidv4()}
            date={currentDate}
            newTests={newTests}
            newPositives={newPositives}
            totalPositives={totalPositives}
            newHospitalizations={newHospitalizations}
            totalHospitalizations={totalHospitalizations}
            newDeaths={newDeaths}
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
