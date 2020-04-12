import React from 'react';
import DateCardContainer from './DateCardContainer.js'

var endPoint = "https://api.thevirustracker.com/free-api?countryTimeline=US"

export default class Main extends React.Component {

  state = {
    dates: null,
  }

  cacheCurrentData = (data) => {
    if (this.state.dates == null) {
      const dates = data.timelineitems[0]
      this.setState({
        dates
      })
    }
    // console.log("dates object: ", dates)
    // console.log("4/07/20 data: ", dates["4/07/20"])
  }

  // renderDateInfo = () => {
  //   const { dates } = this.state
  //   if (dates) {
  //     const dateKeys = Object.keys(dates)
  //     return dateKeys.map((dateKey) => {
  //       const dateInfo = dates[dateKey]
  //       console.log("dateInfo: ", dateInfo)
  //       return (<DateCard dateInfo={dateInfo}></DateCard>)
  //     })
  //
  //   }
  // }

  render() {
    return (
      <div className={"main"}>
        <DateCardContainer dates={this.state.dates}></DateCardContainer>
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
