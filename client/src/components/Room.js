import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

class Room extends Component {
  render() {
    return (
     <div className="card room-width margin-botton-right">
         <div className="card-header">
         <h5 className="card-title">Room name</h5>
  </div>
  <div className="card-body">
    
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item"><strong>Price</strong>: <span className="room-price"></span> BCCT</li>
    <li className="list-group-item"><strong>Size</strong>: <span className="room-size"></span></li>
    <li className="list-group-item"><strong>Booked by</strong>: <span className="room-booked-by"></span></li>
  </ul>
  <div className="card-body">
  <Button bsStyle="info" className="card-link">Offer Room</Button>
  </div>
</div>
    );
}
}

export default Room;