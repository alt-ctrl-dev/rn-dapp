import React, { Component } from 'react';
import {Grid} from 'react-bootstrap';
import Header from "./components/Header";
import Info from "./components/Info";
import Operation from "./components/Operation";
import Room from "./components/Room";
const Web3 = require('web3');


const TruffleContract = require("truffle-contract");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      web3: null,
      isReady:false,
      isLoading:true,
      isLocal:false,
      BCCRoomBooking:null,
      owner:0x0,
      coinbase:0x0,
      rooms:[],
      tokens:0
    };
    this.initWeb3 = this.initWeb3.bind(this);
    this.initContract = this.initContract.bind(this);
    this.getOwner = this.getOwner.bind(this);
    this.getCurrentAccount = this.getCurrentAccount.bind(this);
    this.getTokenBalance = this.getTokenBalance.bind(this);
    this.buyTokens = this.buyTokens.bind(this);
  }

  componentDidMount() {
    this.initWeb3();
  }

  initWeb3() {
    console.log("initWeb3");
    let web3;
    if('undefined' !== typeof window && 'undefined' !== typeof window.web3){
      console.log("Web3 Injected")
      web3 = new Web3(window.web3.currentProvider);
      this.setState({
        isLocal:true
      })
    }
    else {
      let provider = new Web3.providers.HttpProvider('http://127.0.0.1:7545');
      web3 = new Web3(provider);
    }
    this.setState({
        web3
    }, function () {
        this.initContract()
    })
    
  }

  async initContract(){
    console.log("initContract");
    try {
      let output = await fetch("http://localhost:5000/bc.png")
    var bccRoomBookingArtifact = await output.json();
    let contract = TruffleContract(bccRoomBookingArtifact);
    contract.setProvider(this.state.web3.currentProvider);

    let instance = await contract.deployed();
    this.setState({BCCRoomBooking:instance}, function () {
      this.setState({
        isReady:true
      })
      this.getOwner();
    })
    } catch (error) {
      alert("Could not get contract");
      console.error(error)
    }
    
  }

  async getOwner() {
    try{
      let owner = await this.state.BCCRoomBooking.owner()
      this.setState({owner});
      this.getCurrentAccount();
      this.listenEvents();
    }
    catch(e){
      alert("Could not get owner");
      console.error(e)
    }
  }

  listenEvents() {
      var offerRoomEvent = this.state.BCCRoomBooking.OfferRoomEvent({
        fromBlock: 0,
        toBlock: 'latest'
      });
      offerRoomEvent.watch(function (error, result) {
        console.log(result.args);
        debugger;
        //App.updateUI();
      });
  
      var bookRoomEvent = this.state.BCCRoomBooking.BookRoomEvent({
        fromBlock: 0,
        toBlock: 'latest'
      });
      bookRoomEvent.watch(function (error, result) {
        console.log(result.args);
        debugger;
        //App.updateUI();
      });
  }

  async getCurrentAccount() {
    //Add logic to select ganache account
    try {
      var coinbase =  this.state.isLocal?this.state.web3.eth.accounts[0]:this.state.web3.eth.accounts[1];
      if (coinbase !== App.account) {
        this.setState({coinbase},()=>{
          this.getTokenBalance();
        });
      }
      if(this.state.isLocal){
        window.requestAnimationFrame(this.getCurrentAccount);
      }
      this.setState({isLoading:false});
    } catch (err) {
      alert("Could not get Current Account")
      console.log(err.message);
    }

  }

  async getTokenBalance() {
    try {
      var tokens = await this.state.BCCRoomBooking.getBalance(this.state.coinbase);
      this.setState({tokens:tokens.toNumber()});
    } catch (err) {
      alert("Could not get Tokens")
      console.log(err.message);
    }
  }

  async buyTokens() {
    try {
      let val = this.state.web3.toWei(1,"ether");
      var tx = await this.state.BCCRoomBooking.purchaseTokens({value:val,from:this.state.coinbase});
      this.getTokenBalance();
    } catch (err) {
      console.error(err);
      alert('buyTokens error occured');
    }
  }

  render() {
    let rooms = [];
    const listItems = rooms.map((room) =>
      <Room  key={room.toString()}/>
  );
  
    return (
      (this.state.isReady)?(  
        (
          (!this.state.isLoading)?(  
            <Grid>
      <Header/>     
      <Info isOwner={this.state.owner===this.state.coinbase} coinbase={this.state.coinbase} tokens={this.state.tokens}/>
      <Operation isOwner={this.state.owner===this.state.coinbase} buyTokens={this.buyTokens}/>
      <div className="d-flex justify-content-center align-items-center flex-wrap">
      {listItems}
      </div>
      </Grid>
        ) : (
          <div>Loading</div>
          )
        )
        ) : (
        <div>Not Ready</div>
      )
    );
  }
}

export default App;