import React from 'react'

export default class DateCard extends React.Component {


  formatDate = () => {
    const fullDate = this.props.date
    const dateArray = fullDate.split("T")
    return dateArray[0]
  }

  toTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }


  // NEED TO PULL CHANGES FROM BRANCH THAT HAD FIXED THE NEW/TOTAL CASE/DEATH
  // COUNT. ONLY MERGED INTO MASTER BUT NOT INTO THIS BRANCH. NEED TO MERGE
  // CHANGES IN 'DateCardContainer' INTO THIS BRANCH SO THAT DATA IN PROPS GETS
  // PASSED TO 'DateCard'. THEN 'handleClick' CAN USE 'setActiveDateCard' AND
  // 'toTop' AS EXPECTED
  handleClick = () => {
    const {
      newCases,
      totalCases,
      totalDeaths,
      newDeaths,
      setActiveDateCard
    } = this.props
    setActiveDateCard(this.formatDate(), newCases, newDeaths, totalCases, totalDeaths)
    this.toTop()
  }

  render() {
    const { newCases, totalCases, totalDeaths, newDeaths } = this.props
    return (
      <div className={"date-card"} onClick={this.handleClick}>
        <h2>{this.formatDate()}</h2>
        <p>{`New Cases: ${newCases}`}</p>
        <p>{`New Deaths: ${newDeaths}`}</p>
      </div>
    )
  }

}
