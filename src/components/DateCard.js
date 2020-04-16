import React from 'react'

export default class DateCard extends React.Component {

  render() {
    const { date, confirmed, deaths, setActiveDateCard } = this.props
    return (
      <div className={"date-card"} onClick={() => {setActiveDateCard(date, confirmed, deaths)}}>
        <h2>{date}</h2>
        <p>{`New Cases: ${confirmed}`}</p>
        <p>{`New Deaths: ${deaths}`}</p>
      </div>
    )
  }

}
