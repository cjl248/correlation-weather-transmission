import React from 'react';
import DateCardContainer from './DateCardContainer.js'
import DateCardDetails from '../components/DateCardDetails.js'

// var endPoint = "https://api.thevirustracker.com/free-api?countryTimeline=US"

var unitedStatesEndpoint = "https://coronavirus-tracker-api.herokuapp.com/v2/locations/225"

// var newYorkEndpoint = "https://coronavirus-tracker-api.herokuapp.com/v2/locations?source=nyt&timelines=true&province=New%20York"

export default class Main extends React.Component {

  state = {
    caseInfo: null,
    activeCard: null,
  }

  cacheCurrentData = (data) => {
    if (this.state.caseInfo == null) {
      const caseInfo = data.location.timelines
      this.setState({
        caseInfo
      })
    }
  }

  setActiveDateCard = (date, confirmed, deaths) => {
    const activeCard = [date, confirmed, deaths]
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
          caseInfo={this.state.caseInfo}
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
