import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from "../config";
import { Link } from 'react-router-dom';

function Wallet(){
    const [walletInfo, setWalletInfo] = useState({});

    useEffect(() => {
        fetch(`${ API_BASE_URL }/wallet/info`)
        .then(response => response.json())
        .then(json => setWalletInfo(json));
    }, []);
    //destructure walletInfo to get address and balance
    const { address, balance } = walletInfo;
    return (
        <div className="App">
            <Link to='/'>Home</Link>
            <hr />
            <h3>Wallet information</h3>
            <br />
            <div className="WalletInfo">
                <div>Address: {address} </div>
                <div>Balance: {balance} </div>
            </div>
        </div>
        
    )
}

export default Wallet;