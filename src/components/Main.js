import React from 'react';
import HornedBeast from './HornedBeast.js';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import data from '../assets/data/data.json';


class Main extends React.Component {
  render() {
    return (
      <>
        <Container>
          <Row xs={1} sm={1} md={2} lg={3} xl={4} className="g-4">
            {this.props.data.map((beast) => {
              return (
                <Col>
                  <HornedBeast
                    id={beast._id}
                    key={beast._id}
                    title={beast.title}
                    image_url={beast.image_url}
                    description={beast.description}
                    keyword={beast.keyword}
                    horns={beast.horns}
                    handleShowBeast={this.props.handleShowBeast}
                  />
                </Col>
              )})}
          </Row>
        </Container>
      </>
    );
  }
}

export default Main;
