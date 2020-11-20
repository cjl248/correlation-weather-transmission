import React from 'react'

// imports from bootstrap components
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'

export default class DateCard extends React.Component {

  state = {
    activeTab: "#tests",
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
      activeTab: eventKey.toString()
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
    if (this.state.activeTab === "#tests") {
      return (
        <span>{`New Tests: ${newTests}`}</span>
      )
    } else if (this.state.activeTab === "#cases") {
      return (
        <>
          <span>{`New Cases: ${newPositives}`}</span>
          <span>{`Total Cases: ${totalPositives}`}</span>
        </>
      )
    } else if (this.state.activeTab === "#deaths") {
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
            defaultActiveKey="#tests">
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
    // return (
    //   <div className="date-card" onClick={this.handleClick}>
    //     <h2>{`Date: ${this.formatDate()}`}</h2>
    //     <p>{`New  Tests: ${newTests}`}</p>
    //     <p>{`New Cases: ${newPositives}`}</p>
    //     <p>{`Total Cases: ${totalPositives}`}</p>
    //     <p>{`New Deaths: ${newDeaths}`}</p>
    //     <p>{`Total Deaths: ${totalDeaths}`}</p>
    //   </div>
    // )
  }

}
