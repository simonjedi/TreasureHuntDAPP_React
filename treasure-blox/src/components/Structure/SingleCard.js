import React from 'react';

import img1 from './images/Treasure-hunt.jpeg';


import { CardColumns,CardGroup,Card,Button,Container,Nav,Navbar,NavDropdown,Row,Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './SingleCard.css';

const SingleCard = (props) => {
  const commaNumber = require('comma-number')


  const decimals = props.decimals;
  const treasure = commaNumber(props.totalTreasure,',');


  // commaNumber('-1000,12', '.', ',') // "-1.000,12"




  return(

    <Container className='mt-5' fluid="md">


    <Row >
    <Col>
    <div className="spaceTop">
      <Card className="customRounded">
      <Card.Header >Welcome To Treasure Blox</Card.Header>
      <Card.Body className='customBody'>
        <Card.Title>The Marketing blox to submit your treasure hunt answer</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.

        </Card.Text>

      </Card.Body >
      <blockquote className="blockquote mb-0 card-body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
          erat a ante.
        </p>
        <footer className="blockquote-footer">
          <small className="text-muted">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </small>
        </footer>
      </blockquote>
      </Card>
    </div>


    </Col>
    <Col>
    <div className="spaceTop">
      <Card className="customRounded">
      <Card.Header >Treasure Information</Card.Header>
      <Card.Body className='customBodyTwo'>
        <div className="gameMainTitle">Total Treasure</div>

        <div className="gamePrize">{treasure} Blox</div>
        <div className="postMainPrize">Est $1,000.00</div>

        <Row xs={2} md={2} lg={2}>
          <Col >1 of {decimals}</Col>
          <Col >2 of 2</Col>
        </Row>

      </Card.Body >

      </Card>
    </div>

    </Col>
  </Row>





    </Container>


  );


};

export default SingleCard;
