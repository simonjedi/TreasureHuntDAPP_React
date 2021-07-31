import React, { Component, useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';
import moment from 'moment';


import { CardColumns,CardGroup,Card,Button,Container,Nav,Navbar,NavDropdown,Row,Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css';

const Timer = (props) => {



console.log("This is the timer time: ",props.countGame1)






  return(

    <div>



      {props.countGame1DeadlineTrue ? (
        <div className="attemptPrize">{props.allGame1_username} has activated the time lock! This lock will expire in {props.countGame1} seconds! The time lock gives {props.allGame1_username} exclusive access to submit the treasure secret.
        Good luck {props.allGame1_username} you'll need it!
        </div>
      ) : (
        <div className="attemptPrize">You can currently lock in a time slot and submit the secret.
        </div>
      )}



    </div>

  );

};

export default Timer;
