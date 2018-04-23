import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";


// const Dapp = (props, context) => (
//     <div>
//       {methods.filter(
//         // filter out the 'Ether' option if no account is available
//         method => method !== 'Ether' || !!context.web3.selectedAccount
//       ).map(
//         method => <App method={method} key={method} />
//       )}
//     </div>
//   )


// const Dapp = (props, context) => {
//     console.log(context);
//     console.log(props);
//     debugger;
//     return (
//     <div>
//       test
//     </div>
//   );}


//   ReactDOM.render(
//     <Web3Provider web3UnavailableScreen={() => <div>You need web3!</div>} accountUnavailableScreen={() => <div>Please unlock your wallet!</div>} onChangeAccount={nextAddress => console.log(nextAddress)}>
//         <Dapp />
//     </Web3Provider>, document.getElementById('root'));

ReactDOM.render(
    <App />, document.getElementById('root'));
registerServiceWorker();


