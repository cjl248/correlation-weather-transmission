import React from 'react';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
// import Form from 'react-bootstrap/Form'
// import FormControl from 'react-bootstrap/FormControl'
// import Button from 'react-bootstrap/Button'

const codeToStat = {
  '2.1': 'Tests',
  '2.2': 'Cases',
  '2.3': 'Deaths'
}
const codeToMonth = {
  '1.1': 'January',
  '1.2': 'February',
  '1.3': 'March',
  '1.4': 'April',
  '1.5': 'May',
  '1.6': 'June',
  '1.7': 'July',
  '1.8': 'August',
  '1.9': 'September',
  '1.10': 'October',
  '1.11': 'November',
  '1.12': 'December',
}

export default class DateCardNav extends React.Component {

  renderNav = () => {
    return (
      <>
        <span className='filter-label'>{"Filter by ... "}</span>
        <Nav
          className='date-nav'
          variant='pills'
          onSelect={this.handleSelect}>
          <NavDropdown title={codeToMonth[this.props.activeMonth] || 'Show Month'} id="month-dropdown"  bg='primary'>
            <NavDropdown.Item eventKey="1.1" className='drop-down-month'>{`January`}</NavDropdown.Item>
            <NavDropdown.Item eventKey="1.2" className='drop-down-month'>{`February`}</NavDropdown.Item>
            <NavDropdown.Item eventKey="1.3" className='drop-down-month'>{`March`}</NavDropdown.Item>
            <NavDropdown.Item eventKey="1.4" className='drop-down-month'>{`April`}</NavDropdown.Item>
            <NavDropdown.Item eventKey="1.5" className='drop-down-month'>{`May`}</NavDropdown.Item>
            <NavDropdown.Item eventKey="1.6" className='drop-down-month'>{`June`}</NavDropdown.Item>
            <NavDropdown.Item eventKey="1.7" className='drop-down-month'>{`July`}</NavDropdown.Item>
            <NavDropdown.Item eventKey="1.8" className='drop-down-month'>{`August`}</NavDropdown.Item>
            <NavDropdown.Item eventKey="1.9" className='drop-down-month'>{`September`}</NavDropdown.Item>
            <NavDropdown.Item eventKey="1.10" className='drop-down-month'>{`October`}</NavDropdown.Item>
            <NavDropdown.Item eventKey="1.11" className='drop-down-month'>{`November`}</NavDropdown.Item>
            <NavDropdown.Item eventKey="1.12" className='drop-down-month'>{`December`}</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title={codeToStat[this.props.activeStat] || 'Show Statistic'} id='statistic-dropdown' bg='primary'>
            <NavDropdown.Item eventKey="2.1" className='drop-down-choice' >{`Tests`}</NavDropdown.Item>
            <NavDropdown.Item eventKey="2.2" className='drop-down-choice' >{`Cases`}</NavDropdown.Item>
            <NavDropdown.Item eventKey="2.3" className='drop-down-choice' >{`Deaths`}</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        {/*
        <Form inline className='case-filter'>
          <FormControl type="text" placeholder="Number" className="mr-ms-2" />
          <Button variant="outline-primary">Filter</Button>
        </Form>
        */}
      </>
    )
  }

  handleSelect = (eventKey) => {
    this.props.setActive(eventKey)
  }

  render() {
    return (
      <div className="card-nav">
        {this.renderNav()}
      </div>
    )
  }

}
