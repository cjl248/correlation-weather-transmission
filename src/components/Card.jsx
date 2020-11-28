import React from 'react'

// imports from bootstrap components
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'

export default class DateCard extends React.Component {

  state = {
    activeStat: "#tests",
  }


  formatDate = () => {
    if (!this.props.dateInfo.currentDate) return
    const rawDate = this.props.dateInfo.currentDate
    const year = rawDate.slice(0, 4)
    const month = rawDate.slice(4, -2)
    const date = rawDate.slice(-2)
    const fullDate = `${month}/${date}/${year}`
    return fullDate
  }

  handleSelect = (eventKey) => {
    this.setState({
      activeStat: eventKey.toString()
    })
  }

  renderInfo = () => {
    const {
      newTests,
      newPositives,
      totalPositives,
      newDeaths,
      totalDeaths,
    } = this.props.dateInfo
    if (this.state.activeStat === "#tests") {
      return (
        <span>{`New Tests: ${newTests}`}</span>
      )
    } else if (this.state.activeStat === "#cases") {
      return (
        <>
          <span>{`New Cases: ${newPositives}`}</span>
          <span>{`Total Cases: ${totalPositives}`}</span>
        </>
      )
    } else if (this.state.activeStat === "#deaths") {
      return (
        <>
          <span>{`New Deaths: ${newDeaths}`}</span>
          <span>{`Total Deaths:${totalDeaths}`}</span>
        </>
      )
    }
  }

  render() {

    return (
      <Card bg="light" border="primary" className="#date-card">
        <Card.Header className="date-card-header">
          <Nav
            fill
            onSelect={this.handleSelect}
            variant='pills'
            activeKey={this.state.activeStat || "#tests"}>
            <Nav.Item>
              <Nav.Link
                href="#tests">
                {`Tests`}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="#cases">
                {`Cases`}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="#deaths">
                {`Deaths`}
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body className="date-card-body">
          <div>{`Date: ${this.formatDate()}`}</div>
          {this.renderInfo()}
        </Card.Body>
      </Card>
    )
  }

  componentDidMount() {
    if (!this.props.activeStat) return

    const codeToStat = {
      '2.1': '#tests',
      '2.2': '#cases',
      '2.3': '#deaths'
    }
    this.setState({
      activeStat: codeToStat[this.props.activeStat]
    })
  }
}
