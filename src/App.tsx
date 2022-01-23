import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Contract from "web3-eth-contract";

import { AbiItem } from "web3-utils";

import abi from "./abi.json";

// @ts-expect-error setProvider is not defined
Contract.setProvider(
  "wss://rinkeby.infura.io/ws/v3/2232166cec78439dbff035acfaf575ec"
);

const contract = new Contract(
  abi as AbiItem[],
  "0xF9f61dDa5D8152567D6F3e7586D4818Bf54A7B87"
);

contract.methods.getImage().call().then(console.log);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
