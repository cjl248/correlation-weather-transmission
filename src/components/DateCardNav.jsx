import React from 'react';

// import bootstrap components
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

export default class DateCardNav extends React.Component {

  renderNav = () => {
    return (
      <>
        <span>{"Filter by ... "}</span>
        <Nav
          className='date-nav'
          variant='pills'>
          <NavDropdown title="Month" id="month-dropdown"  bg='primary'>
            <NavDropdown.Item eventKey="1.1">{`January`}</NavDropdown.Item>
            <NavDropdown.Item eventKey="1.2">{`February`}</NavDropdown.Item>
            <NavDropdown.Item eventKey="1.3">{`March`}</NavDropdown.Item>
            <NavDropdown.Item eventKey="1.4">{`April`}</NavDropdown.Item>
            <NavDropdown.Item eventKey="1.5">{`May`}</NavDropdown.Item>
            <NavDropdown.Item eventKey="1.6">{`June`}</NavDropdown.Item>
            <NavDropdown.Item eventKey="1.7">{`July`}</NavDropdown.Item>
            <NavDropdown.Item eventKey="1.8">{`August`}</NavDropdown.Item>
            <NavDropdown.Item eventKey="1.9">{`September`}</NavDropdown.Item>
            <NavDropdown.Item eventKey="1.10">{`October`}</NavDropdown.Item>
            <NavDropdown.Item eventKey="1.11">{`November`}</NavDropdown.Item>
            <NavDropdown.Item eventKey="1.12">{`December`}</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title='Number of' id='choice-dropdown' bg='primary'>
            <NavDropdown.Item eventKey="2.1" class='drop-down-choice' >{`Cases`}</NavDropdown.Item>
            <NavDropdown.Item eventKey="2.2" class='' >{`Deaths`}</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline className='case-filter'>
          <FormControl type="text" placeholder="Filter" className="mr-ms-2" />
          <Button variant="outline-primary">Filter</Button>
        </Form>
      </>
    )
  }

  render() {
    return (
      <div className="card-nav">
        {this.renderNav()}
      </div>
    )
  }

}
