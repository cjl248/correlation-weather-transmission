import React from 'react';

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

  renderDateInfo = () => {
    if (this.state.dates) {
      console.log(Object.keys(this.state.dates))
      // this.state.dates.values().map((date) => {
      //   console.log(date)
      // })
    }
  }

  render() {
    return (
      <div className={"main"}>
        {this.renderDateInfo()}
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
