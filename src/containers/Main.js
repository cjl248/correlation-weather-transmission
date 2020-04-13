import React from 'react';
import DateCardContainer from './DateCardContainer.js'
import DateCardDetails from '../components/DateCardDetails.js'

var endPoint = "https://api.thevirustracker.com/free-api?countryTimeline=US"

export default class Main extends React.Component {

  state = {
    caseInfo: null,
    activeCard: null,
  }

  setActiveDateCard = (date, info) => {
    const activeCard = [date, info]
    this.setState({
      activeCard
    })
  }

  cacheCurrentData = (data) => {
    if (this.state.caseInfo == null) {
      const caseInfo = data.timelineitems[0]
      this.setState({
        caseInfo
      })
    }
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
    fetch(endPoint, config)
      .then(response => response.json())
      .then(this.cacheCurrentData)
      .catch(error => console.log("error: ", error))
  }

}
