import React from 'react';
import DateCardContainer from './DateCardContainer.js'
import DateCardDetails from '../components/DateCardDetails.js'

var newYorkEndpoint = "http://localhost:3000/days"

export default class Main extends React.Component {

  state = {
    dateInfo: null,
    activeCard: null,
    activeMonth: null,
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]
  }

  cacheCurrentData = (data) => {
    if (this.state.dateInfo == null) {
      const dateInfo = data
      this.setState({
        dateInfo
      })
    }
  }

  setActiveDateCard = (date, newTests, newPositives, totalPositives, newDeaths, totalDeaths) => {
    const activeCard = {
      date,
      newTests,
      newPositives,
      totalPositives,
      newDeaths,
      totalDeaths,
    }
    this.setState({
      activeCard
    })

  }

  render() {
    return (
      <div className={"main"}>
        <DateCardDetails
          card={this.state.activeCard}>
        </DateCardDetails>
        <DateCardContainer
          dateInfo={this.state.dateInfo}
          setActiveDateCard={this.setActiveDateCard}>
        </DateCardContainer>
      </div>
    )
  }

  componentDidMount() {
    const config = {
      method: 'GET',
      redirect: 'follow',
    }
    fetch(newYorkEndpoint, config)
      .then(response => response.json())
      .then(this.cacheCurrentData)
      .catch(error => console.log("error: ", error))
  }

}
