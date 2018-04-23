import React, { Component } from 'react';
import {Jumbotron,Col,Row,Image} from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
        <Jumbotron>
            <Row> 
                <Col xs={6} sm={6} md={6} lg={6} className="d-flex justify-content-center justify-content-sm-end justify-content-md-end justify-content-lg-endjustify-content-xl-end align-items-center">
                    <Image className="rounded-circle" src="imgs/bcc_logo.png" alt="logo" />
                </Col>
                <Col xs={6} sm={6} md={6} lg={6} className="d-flex justify-content-center justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start align-items-center">
                    <span className="h1 text-center align-middle">Room Booker</span>
                </Col>
            </Row>
        </Jumbotron>
  );
  }
}

export default Header;