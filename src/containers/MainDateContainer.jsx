import React from 'react';
import DateCards from '../components/DateCards.jsx'
import DateCardNav from '../components/DateCardNav.jsx'

var newYorkEndpoint = "http://localhost:3000/days"

export default class MainDateContainer extends React.Component {


  state = {
    dateInfo: null,
    activeMonth: null,
    activeStat: null,
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

  setActiveStat = (stat) => {
    if (stat.toString().slice(0,1) === '1') {
      this.setState({
        activeMonth: stat
      })
    } else if (stat.toString().slice(0,1) === '2') {
      this.setState({
        activeStat: stat
      })
    }
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
          card={this.state.activeCard}
          activeStat={this.state.activeStat}
          activeMonth={this.state.activeMonth}
          setActiveStat={this.setActiveStat}>
        </DateCardNav>
        <DateCards
          dateInfo={this.state.dateInfo}
          activeStat={this.state.activeStat}
          activeMonth={this.state.activeMonth}>
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
