import React from 'react';
import DateCards from '../components/DateCards.jsx'
import DateCardNav from '../components/DateCardNav.jsx'

var newYorkEndpoint = "http://localhost:3000/days"

export default class MainDateContainer extends React.Component {


  state = {
    dateInfo: null,
    activeMonth: '1.3',
    activeStat: null,
    months: {
      "1.1": '01',
      "1.2": '02',
      "1.3": '03',
      "1.4": '04',
      "1.5": '05',
      "1.6": '06',
      "1.7": '07',
      "1.8": '08',
      "1.9": '09',
      "1.10": '10',
      "1.11": '11',
      "1.12": '12'
    }
  }

  setActive = (stat) => {
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

  getActiveMonth = (monthCode=null) => {
    if (!monthCode) return
    return this.state.months[monthCode]
  }


  passMonths = (month=null) => {
    if (!this.state.dateInfo) return
    if (!month) {
      return this.state.dateInfo
    } else {
      return this.state.dateInfo.filter(info => {
        const monthDigit = info.date.slice(4, 6)
        return monthDigit === month
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
          setActive={this.setActive}>
        </DateCardNav>
        <DateCards
          dateInfo={this.passMonths(this.getActiveMonth(this.state.activeMonth))}
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
