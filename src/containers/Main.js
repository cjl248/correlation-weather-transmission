import React from 'react';
import DateCardContainer from './DateCardContainer.js'
import DateCardDetails from '../components/DateCardDetails.js'

// var endPoint = "https://api.thevirustracker.com/free-api?countryTimeline=US"

var unitedStatesEndpoint = "http://localhost:3000/days"

// var newYorkEndpoint = "https://coronavirus-tracker-api.herokuapp.com/v2/locations?source=nyt&timelines=true&province=New%20York"

export default class Main extends React.Component {

  state = {
    dateInfo: null,
    activeCard: null,
  }

  cacheCurrentData = (data) => {
    if (this.state.dateInfo == null) {
      const dateInfo = data
      this.setState({
        dateInfo
      })
    }
  }

  setActiveDateCard = (date, newCases, newDeaths, totalCases) => {
    const activeCard = [date, newCases, newDeaths, totalCases]
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
    fetch(unitedStatesEndpoint, config)
      .then(response => response.json())
      .then(this.cacheCurrentData)
      .catch(error => console.log("error: ", error))
  }

}
