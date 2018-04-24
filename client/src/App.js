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
      isLocked:false,
      BCCRoomBooking:null,
      owner:0x0,
      coinbase:0x0,
      rooms:[],
      tokens:0
    };
    // this.initWeb3 = this.initWeb3.bind(this);
    // this.initContract = this.initContract.bind(this);
    // this.getOwner = this.getOwner.bind(this);
    this.getCurrentAccount = this.getCurrentAccount.bind(this);
    // this.getTokenBalance = this.getTokenBalance.bind(this);
    this.buyTokens = this.buyTokens.bind(this);
    this.offerRoom = this.offerRoom.bind(this);
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
        isLocal:true,
        isLocked:web3.eth.accounts.length===0
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
      this.setState({isLoading:false});
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
      var coinbase;
      if(!this.state.isLocal){
        let output = await fetch("http://localhost:5000/api/account")
        var data = await output.json();
        console.log(data.random);
        coinbase = data.account;
      }
      else{
        this.setState({
          isLocked:this.state.web3.eth.accounts.length===0
        })
        coinbase = (this.state.web3.eth.accounts.length)?this.state.web3.eth.accounts[0]:0x0;
      }

      if (coinbase !== this.state.coinbase) {
        this.setState({coinbase},()=>{
          if(!this.state.isLocked)
          this.getTokenBalance();
        });
      }
      if(this.state.isLocal)
        window.requestAnimationFrame(()=>{
          this.getCurrentAccount();
          this.getTokenBalance();
        });

    } catch (err) {
      alert("Could not get Current Account")
      console.log(err.message);
    }

  }

  async getTokenBalance() {
    try {
      var tokens = await this.state.BCCRoomBooking.getBalance(this.state.coinbase);
      this.setState({
        tokens:tokens.toNumber(),
        isLoading:false
      });

    // debugger;
    } catch (err) {
      alert("Could not get Tokens")
      console.log(err.message);
    }
  }

  async buyTokens() {
    try {
      let val = this.state.web3.toWei(1,"ether");
      await this.state.BCCRoomBooking.purchaseTokens({value:val,from:this.state.coinbase});
      this.setState({
        isLoading:true
      },()=>{
        setTimeout(()=>{
          this.getTokenBalance();
        },2500)
      })
    } catch (err) {
      console.error(err);
      alert('buyTokens error occured');
    }
  }

  async offerRoom({name,price,description,size}) {
    try {
      if ((name.trim() === '') || (price === 0)) {
        alert("You have to have a name of the room and price for the room!");
        return;
      }
      await this.state.BCCRoomBooking.offerRoom(name, description, size, price, {
          from: App.account,
          gas: 500000
        })
    } catch (error) {
      
    }
  }

  render() {
    let rooms = [];
    const listItems = rooms.map((room) =>
      <Room  key={room.toString()}/>
  );
  
    return (
      (this.state.isLocked)?(
        <div>Please unlock account</div>
      ):
      (
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
      ))
    );
  }
}

export default App;