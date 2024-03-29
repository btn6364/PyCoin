import React from 'react';
import { Link } from 'react-router-dom';
import wallet from '../assets/wallet.png';

function App() {
  return (
    <div className="App">
      <img className="logo" src={ wallet } alt="application-logo"/>
      <h3>Welcome to PyCoin!</h3>
      <br />
      <Link to="/blockchain">Blockchain</Link>
      <Link to="/conduct-transaction">Conduct a Transaction</Link>
      <Link to="/transaction-pool">Transaction Pool</Link>
      <Link to="/wallet-info">Wallet Information</Link>
      <br />
    </div>
  );
}

export default App;
