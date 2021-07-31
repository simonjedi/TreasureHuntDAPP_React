import { Button,Container,Nav,Navbar,NavDropdown } from 'react-bootstrap';
import MyNav from './MyNav';
import MyCards from './components/Structure/Cards';
import SingleCard from './components/Structure/SingleCard';
import moment from 'moment';

// import img1 from './Treasure-hunt.jpeg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import React, { Component, useState, useEffect } from 'react'
import getWeb3 from "./getWeb3";
import Connection from "./Connection";
import { useWallet, UseWalletProvider } from 'use-wallet'
import "./App.css";

const App = () => {
  const [web3,setWeb3] = useState(null)
  const [accounts,setAccounts] = useState(null)
  const [contract,setContract] = useState(null)
  const [decimals,setDecimals] = useState(null)
  const [totalTreasure,setTotalTreasure] = useState(null)

  const [game1_id,setGame1_id] = useState(undefined)
  const [game1_live,setGame1_live] = useState(undefined)
  const [game1_prize,setGame1_prize] = useState(undefined)
  const [game1_question_hash,setGame1_question_hash] = useState(undefined)
  const [game1_cost_to_enter,setGame1_cost_to_enter] = useState(undefined)
  const [game1_submit_secret_cost,setGame1_submit_secret_cost] = useState(undefined)
  const [game1_riddle,setGame1_riddle] = useState(undefined)
  const [game1_clue,setGame1_clue] = useState(undefined)

  const [allGame1_id,setallGame1_id] = useState(undefined)
  const [allGame1_user_front_of_que,setallGame1_user_front_of_que] = useState(undefined)
  const [allGame1_deadline_time,setallGame1_deadline] = useState(undefined)
  const [allGame1_username,setallGame1_username] = useState(undefined)
  const [allGame1_total_game_tries,setallGame1_total_game_tries] = useState(undefined)

  const [countGame1, setTimeGame1] = useState(60);
  const [countGame1DeadlineTrue, setcountGame1DeadlineTrue] = useState(false);

  useEffect(() => {

      const init = async() => {

        const web3 = await getWeb3();

        const accounts = await web3.eth.getAccounts();

        const abi = require('./TreasureBlox.abi.json');
        // Set the provider
        // web3.setProvider(new web3.providers.WebsocketProvider('ws://localhost:8545'));
        // this.web3.setProvider(new this.web3.providers.HttpProvider('https://data-seed-prebsc-1-s1.binance.org:8545/'));
        const contract = new web3.eth.Contract(abi,"https://data-seed-prebsc-1-s1.binance.org:8545/" && "0xd3AC7a5C850a8B5936F458e849357e13Ab208a1C");

        // Sstart Data Calls
        const decimals = await contract.methods.decimals().call().then(console.log('Yes'));

        const totalTreasure = await contract.methods.balanceOf("0x253f8e0c6334B173848D8a5bfdf878d757Dc5435").call();


        // const owner = await contract.methods._owner().call();
        // const marketingWallet = await contract.methods.marketingWallet().call().then(console.log('marketing Wallet Complete'));
        //
        // const total_supply = await contract.methods.totalSupply().call();
        // const treasure_chest = await contract.methods.treasureChest().call();

// GET GAMES
        const game1 = await contract.methods.Games(1).call();

        const game1_id = await game1[0];
        const game1_live = await game1[1];
        const game1_prize = await game1[2];
        const game1_question_hash = await game1[3];
        const game1_cost_to_enter = await game1[4];
        const game1_submit_secret_cost = await game1[5];
        const game1_riddle = await game1[6];
        const game1_clue = await game1[7];
        // console.log(game1_riddle)



// This Handels the countdown time and collecting information every 1 second so the counter goes down
        const timer = window.setInterval( async() => {
            var moment = require('moment'); // require

            // GET ALL GAME TIMELINES AND gamesTriess
            const allGame1 = await contract.methods.allGames(1).call();
            const allGame1_id = await allGame1[0];
            const allGame1_user_front_of_que = await allGame1[1];
            const allGame1_deadline_time =  await allGame1[2];
            const allGame1_username = await allGame1[3];
            const allGame1_total_game_tries = await allGame1[4];

            var currentStartDate = Date();
            var startDate = new Date(currentStartDate);
            // // Hours part from the timestamp
            // var startDateHours = startDate.getHours();
            // // Minutes part from the timestamp
            // var startDateMinutes = startDate.getMinutes();
            // // Seconds part from the timestamp
            // var startDateSeconds = startDate.getSeconds();

            // Do
            var endDateGame1 = new Date(allGame1_deadline_time * 1000);
            // // Hours part from the timestamp
            // var endDateHours = endDate.getHours();
            // // Minutes part from the timestamp
            // var endDateMinutes = endDate.getMinutes();
            // // Seconds part from the timestamp
            // var endDateSeconds = endDate.getSeconds();


            function getDifferenceInDays(date1, date2) {
              const diffInMs = Math.abs(date2 - date1);
              return diffInMs / (1000 * 60 * 60 * 24);
              }

            function getDifferenceInHours(date1, date2) {
              const diffInMs = Math.abs(date2 - date1);
              return diffInMs / (1000 * 60 * 60);
              }

            function getDifferenceInMinutes(date1, date2) {
              const diffInMs = Math.abs(date2 - date1);
              return diffInMs / (1000 * 60);
              }

            function getDifferenceInSeconds(date1, date2) {
              const diffInMs = Math.abs(date2 - date1);
              return diffInMs / 1000;
              }
            // console.log(getDifferenceInDays(endDate, startDate));
            // console.log(getDifferenceInHours(endDate, startDate));
            // console.log(getDifferenceInMinutes(endDate, startDate));

            console.log(getDifferenceInSeconds(startDate, endDateGame1));

            var timeGame1 = Math.abs(getDifferenceInSeconds(startDate, endDateGame1));

            setTimeGame1(timeGame1)
            setTimeGame1(prevTime => prevTime - 1); // <-- Change this line!

            setallGame1_id(allGame1_id)
            setallGame1_user_front_of_que(allGame1_user_front_of_que)
            setallGame1_deadline(allGame1_deadline_time)
            setallGame1_username(allGame1_username)
            console.log("username past: ", allGame1_username)
            setallGame1_total_game_tries(allGame1_total_game_tries)

            if (endDateGame1-1 >= startDate){
              setcountGame1DeadlineTrue(true);
            } else {
              setcountGame1DeadlineTrue(false);
            }



        }, 1000);
        // End of Game timer code


        setWeb3(web3)
        setAccounts(accounts[0])
        setContract(contract)
        setDecimals(decimals)
        setTotalTreasure(totalTreasure)

        setGame1_id(game1_id)
        setGame1_live(game1_live)
        setGame1_prize(game1_prize)
        setGame1_question_hash(game1_question_hash)
        setGame1_cost_to_enter(game1_cost_to_enter)
        setGame1_submit_secret_cost(game1_submit_secret_cost)
        setGame1_riddle(game1_riddle)
        setGame1_clue(game1_clue)






      }
      init()


    },[web3,accounts,contract,decimals,totalTreasure,
      game1_id,game1_live,game1_prize,game1_question_hash,game1_cost_to_enter,game1_submit_secret_cost,game1_riddle,game1_clue,
    allGame1_id,allGame1_user_front_of_que,allGame1_deadline_time,allGame1_username,allGame1_total_game_tries,countGame1,countGame1DeadlineTrue])








// const { web3, accounts, contract } = this.state;



    return (

        <div className="background customFont">

          <MyNav accounts={accounts}/>

          <SingleCard decimals={decimals} totalTreasure={totalTreasure}/>

          <MyCards
          game1_id={game1_id}
          game1_live={game1_live}
          game1_prize={game1_prize}
          game1_question_hash={game1_question_hash}
          game1_cost_to_enter={game1_cost_to_enter}
          game1_submit_secret_cost={game1_submit_secret_cost}
          game1_riddle={game1_riddle}
          game1_clue={game1_clue}
          allGame1_id={allGame1_id}
          allGasme1_user_front_of_que={allGame1_user_front_of_que}
          allGame1_deadline_time={allGame1_deadline_time}
          allGame1_username={allGame1_username}
          allGame1_total_game_tries={allGame1_total_game_tries}
          countGame1={countGame1}
          countGame1DeadlineTrue={countGame1DeadlineTrue}/>



          <MyCards/>

      </div>
    );

}

export default App;
