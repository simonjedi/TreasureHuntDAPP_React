import React from 'react';
import Timer from './Timer';

import img1 from './images/img1.jpeg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpeg';
import img4 from './images/img4.jpeg';



import {Tooltip,OverlayTrigger,Form,ButtonGroup,ButtonToolbar,CardColumns,CardGroup,Card,Button,Container,Nav,Navbar,NavDropdown } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css';


const MyCards = (props) => {

  const commaNumber = require('comma-number')


  const game1_id = props.game1_id;
  const game1_live = props.game1_live;
  const game1_prize = commaNumber(props.game1_prize,',');
  const game1_question_hash = props.game1_question_hash;
  const game1_cost_to_enter = props.game1_cost_to_enter;
  const game1_submit_secret_cost = props.game1_submit_secret_cost;
  const game1_clue = props.game1_clue;


  const allGame1_deadline_time = props.allGame1_deadline_time;



  // console.log(game1_id)s

  const renderTooltip = (props) => (


  <Tooltip id="button-tooltip" {...props}>
    Once you have purchased your Blox they buy you 30 seconds to enter your answer, no one else can answer in this time and this stops bots from beating you to it!
  </Tooltip>
);







  return(



    <Container className='mt-5' fluid="md">


      <CardGroup className='mt-5'>
        <CardColumns >

          <Card className='cardRounded'>
            <Card.Img variant="top" src={img1} alt="Logo" className='customRounded'/>
            <Card.Body >
              <Card.Title className="gameTitle">Hunt For Elon's Rocket</Card.Title>

              <div className="gamePrize">Prize {props.game1_prize} Blox</div>
              <div className="gamePrizeBnb">Est $8,423.12</div>




              <Card.Text className="blockquote">
              <large className="text-muted">
              <div className="gameText">
                Clue - <cite title="Source Title">{props.game1_clue} - {props.game1_riddle}
                </cite>
              </div>
              </large>
              </Card.Text>
              <br />

              
              <Timer countGame1={props.countGame1} countGame1DeadlineTrue={props.countGame1DeadlineTrue} allGame1_username={props.allGame1_username} />

              <br />
              <div>


              </div>



              <Form.Control type="text" placeholder="@Username" />
              <br />
              Cost to enter {game1_cost_to_enter}
              <Button className="customButton">Purchase Blox</Button>

              <OverlayTrigger
                placement="left"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
              >
                <Button className="customToolTip">More Info</Button>
              </OverlayTrigger>

              <br />
              <br />
              <footer className="blockquote">


              <div>Game id {props.allGame1_id}</div>
              </footer>
              <div className="postPrize">{props.allGame1_total_game_tries} Attempts <div className="prePrize">Hunt Live = {game1_live}</div></div>


            </Card.Body>

          </Card>
          <Card className='cardRounded'>
          <Card.Img variant="top" src={img4} alt="Logo" className='customRounded'/>
          <Card.Body >
            <Card.Title className="gameTitle">Tweet Geek!</Card.Title>

            <div className="gamePrizeDark">Prize 10,000 Blox</div>
            <div className="gamePrizeDarkBnb">$423.12</div>




            <Card.Text className="blockquote">
            <large className="text-muted">
            <div className="gameText">
              Clue - <cite title="Source Title">Elon's only gone and lost his Rocket Again! Can you help him find it? It may take 50million hampsters to solve this one?</cite>
            </div>
            </large>
            </Card.Text>
            <br />
            <div className="attemptPrize">@Twink currently has 21 seconds left!</div>
<br />


            <Form.Control type="text" placeholder="@Username" />
            <br />
            <Button className="customButton">Purchase Blox</Button>

            <OverlayTrigger
              placement="left"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              <Button className="customToolTip">More Info</Button>
            </OverlayTrigger>

            <br />
            <br />
            <footer className="blockquote">


            </footer>
            <div className="postPrize">23,789 Attempts <div className="prePrize">Hunt Launched 1 day ago</div></div>


          </Card.Body>

          </Card>
          <Card className='cardRounded'>
          <Card.Img variant="top" src={img3} alt="Logo" className='customRounded'/>
          <Card.Body >
            <Card.Title className="gameTitle">Fuck Yeah!</Card.Title>

            <div className="gamePrize">Prize 1Bil Blox</div>
            <div className="gamePrizeBnb">$1,000,000</div>

            <Card.Text className="blockquote">
            <large className="text-muted">
            <div className="gameText">
              Clue - <cite title="Source Title">Elon's only gone and lost his Rocket Again! Can you help him find it? It may take 50million hampsters to solve this one?</cite>
            </div>
            </large>
            </Card.Text>
            <br />
            <div className="attemptPrize">@Twink currently has 21 seconds left!</div>
<br />


            <Form.Control type="text" placeholder="@Username" />
            <br />
            <Button className="customButton">Purchase Blox</Button>

            <OverlayTrigger
              placement="left"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              <Button className="customToolTip">More Info</Button>
            </OverlayTrigger>

            <br />
            <br />
            <footer className="blockquote">



            </footer>
            <div className="postPrize">23,789 Attempts <div className="prePrize">Hunt Launched 1 day ago</div></div>

          </Card.Body>
          </Card>
          </CardColumns>
      </CardGroup>
    </Container>


  );


};

export default MyCards;
