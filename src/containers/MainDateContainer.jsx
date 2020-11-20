import React from 'react';
import DateCards from '../components/DateCards.jsx'
import DateCardNav from '../components/DateCardNav.jsx'

var newYorkEndpoint = "http://localhost:3000/days"

export default class MainDateContainer extends React.Component {

  state = {
    dateInfo: null,
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

  render() {
    return (
      <div className={"date-container"}>
        <DateCardNav
          card={this.state.activeCard}>
        </DateCardNav>
        <DateCards
          dateInfo={this.state.dateInfo}>
        </DateCards>
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
