import React, { Component } from 'react';
import ReactModal from 'react-modal';
import {Button,Panel} from 'react-bootstrap';

ReactModal.setAppElement('#root')
class CustomModal extends Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  
  render () {
    return (
      <span>
      <Button onClick={this.handleOpenModal} bsSize="large" bsStyle="info">Offer Room</Button>
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
           style={customStyles} >
        <Panel>
          <Panel.Heading className="d-flex justify-content-end">
      <Button onClick={this.handleCloseModal}> X </Button></Panel.Heading>
          <Panel.Body>Some default panel content here.</Panel.Body>
          <Panel.Body>Some more panel content here.</Panel.Body>
        </Panel>
        </ReactModal>
      </span>
    );
  }
}

const customStyles = {
  overlay: {
    backgroundColor: '#50505077',
  },
  content:{
    backgroundColor: '#50505000',
    top: '25%',
    left: '25%',
    bottom: '25%',
    right: '25%',
    // width:'100%',
    // margin:'0 auto',
    // border: '0'
  }
};
  
export default CustomModal; 

/*      
<div className="modal fade show" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
*/