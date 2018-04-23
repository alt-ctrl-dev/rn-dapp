import React, { Component } from 'react';
import {Col,Row} from 'react-bootstrap';

class Info extends Component {
  render() {
    return (
        <div>
<Row className="margin-botton"> 
   
   <Col xs={6} sm={6} md={6} lg={6} className="d-flex justify-content-center justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start align-items-center">
   <span className="">{this.props.tokens} Token(s) available</span>
   </Col>

   <Col xs={6} sm={6} md={6} lg={6} className="d-flex justify-content-center justify-content-sm-end justify-content-md-end justify-content-lg-endjustify-content-xl-end align-items-center">
   <span className={(this.props.isOwner)?"owner":""} >Account {this.props.coinbase}</span>
   </Col>

   </Row>
   </div>
    
  );
  }
}

export default Info;