import React from 'react'

export default class DateCard extends React.Component {


  formatDate = () => {
    if (!this.props.dateInfo.currentDate) return
    const rawDate = this.props.dateInfo.currentDate
    const year = rawDate.slice(0, 4)
    const month = rawDate.slice(4, -2)
    const date = rawDate.slice(-2)
    const fullDate = `${month}/${date}/${year}`
    return fullDate
  }

  toTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  handleClick = () => {
    const {
      newTests,
      newPositives,
      totalPositives,
      newDeaths,
      totalDeaths,
    } = this.props.dateInfo
    this.props.setActiveDateCard(this.formatDate(), newPositives, newTests, totalPositives, newDeaths, totalDeaths)
    this.toTop()
  }

  render() {
    const {
      newTests,
      newPositives,
      totalPositives,
      newDeaths,
      totalDeaths,
    } = this.props.dateInfo
    return (
      <div className={"date-card"} onClick={this.handleClick}>
        <h2>{`Date: ${this.formatDate()}`}</h2>
        <p>{`New  Tests: ${newTests}`}</p>
        <p>{`New Cases: ${newPositives}`}</p>
        <p>{`Total Cases: ${totalPositives}`}</p>
        <p>{`New Deaths: ${newDeaths}`}</p>
        <p>{`Total Deaths: ${totalDeaths}`}</p>
      </div>
    )
  }

}
