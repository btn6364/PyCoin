import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../config';
import history from '../history';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';

function ConductTransaction() {
    const [amount, setAmount] = useState(0);
    const [recipient, setRecipient] = useState("");
    const [knownAddresses, setKnownAddresses] = useState([]);

    useEffect(() => {
        fetch(`${API_BASE_URL}/known-addresses`)
            .then(response => response.json())
            .then(json => setKnownAddresses(json));
    }, []);

    const updateRecipient = (event) => {
        setRecipient(event.target.value);
    }

    const updateAmount = (event) => {
        setAmount(Number(event.target.value));
    }

    const submitTransaction = () => {
        fetch(`${API_BASE_URL}/wallet/transact`, {
            method: "POST", 
            headers: {"Content-Type": "application/json"}, 
            body: JSON.stringify({recipient, amount})
        }).then(response => response.json())
          .then(json => {
            console.log("submitTransaction json", json);
            alert("Success!");
            history.push("/transaction-pool");
        });
    }

    return (
        <div className="ConductTransaction">
            <Link to='/'>Home</Link>
            <hr />
            <br />
            <MDBContainer style={{justifyContent: 'center'}}>
                <MDBRow>
                    <MDBCol md="6">
                        <form>
                            <p className="h5 text-center mb-4">Conduct Transaction</p>
                            <div className="grey-text">
                                <MDBInput label="Recipient" placeholder="recipient" icon="user" group type="text" validate error="wrong" success="right" value={recipient} onChange={ updateRecipient }/>
                                <MDBInput label="Amount"  placeholder="amount" icon="envelope" group type="number" validate error="wrong" success="right" value={amount} onChange={ updateAmount } />
                            </div>
                            <div className="text-center">
                                <MDBBtn outline color="info" onClick={ submitTransaction }>Send<MDBIcon far icon="paper-plane" className="ml-1" /></MDBBtn>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        <h4>Known Addresses</h4>
            <div>
                {
                    knownAddresses.map((knownAddress, i) => (
                        <span key={knownAddress}>
                            <u>{knownAddress}</u>{i !== knownAddress.length - 1 ? ", ":""}
                        </span>
                    ))
                }
            </div> 
        </div>
    )
}

export default ConductTransaction;
