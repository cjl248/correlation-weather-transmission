import React from 'react'

// imports from bootstrap components
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'

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
      <Card bg="light" border="primary" className="date-card">
        <Card.Header className="date-card-header">
          <Nav variant='pills' defaultActiveKey="#tests">
            <Nav.Item>
              <Nav.Link href="#tests">{`Tests`}</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#cases">{`Cases`}</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#deaths">{`Deaths`}</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body className="date-card-body">
          <span>{`Date: ${this.formatDate()}`}</span>
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
