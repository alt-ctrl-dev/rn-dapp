import React, { Component } from 'react';
import {Jumbotron,Button} from 'react-bootstrap';
import CustomModal from './CustomModal'

class Operation extends Component {

  constructor(props, context) {
    super(props, context);
    this.offerRoom = this.offerRoom.bind(this);
    this.showDialog = this.showDialog.bind(this);
  }

  offerRoom(){
    var room = {
      "name":"",
      "description":"",
      "price":0,
      "size":""
    }
    this.props.offerRoom(room);
  }

  showDialog(){
    debugger;
  }

  render() {
    
    const button = this.props.isOwner ? (
      <CustomModal/>
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