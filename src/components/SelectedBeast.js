import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

class SelectedBeast extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        <Container>
          <Modal show={this.props.showModal} onHide={this.props.handleClose} >
            <Modal.Header closeButton>
              <Modal.Title>{this.props.displayBeast.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img src={this.props.displayBeast.image_url} alt={this.props.displayBeast.title} className="w-75"/>
              <p>{this.props.displayBeast.description}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.props.handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      </>
    );
  }
}

export default SelectedBeast;