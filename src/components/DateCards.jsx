import React from 'react'
import Card from './Card.jsx'
import { v4 as uuidv4 } from 'uuid'

export default class DateCards extends React.Component {

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
          <Card
            key={uuidv4()}
            dateInfo={dateInfo}
            setActiveDateCard={setActiveDateCard}
            activeStat={this.props.activeStat}
            activeMonth={this.props.activeMonth}>
          </Card>
        )
      })
    }
  }

  render() {
    return (
      <div className={"date-cards"}>
        {this.renderDateInfo()}
      </div>
    )
  }

}
