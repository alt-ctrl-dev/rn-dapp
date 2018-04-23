import React, { Component } from 'react';
import {Jumbotron,Button} from 'react-bootstrap';

class Operation extends Component {
  render() {
    
    const button = this.props.isOwner ? (
      <Button  bsSize="large" bsStyle="info">Offer Room</Button>
    ) : (
      <Button onClick={this.props.buyTokens} bsSize="large" bsStyle="info">Buy 100 Token</Button>
    );

    return (
      <Jumbotron className="mini-jumbotron d-flex justify-content-end">
          {button}
      </Jumbotron>
    );
}
}

export default Operation;