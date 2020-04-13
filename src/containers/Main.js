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
  }

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
