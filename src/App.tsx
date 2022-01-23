import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Contract from "web3-eth-contract";

import { AbiItem } from "web3-utils";

const contractABI: AbiItem[] = [
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_red",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "_green",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "_blue",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "x",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "y",
        type: "uint8",
      },
    ],
    name: "engravePixel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "image",
    outputs: [
      {
        internalType: "bool",
        name: "isSet",
        type: "bool",
      },
      {
        internalType: "uint8",
        name: "red",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "green",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "blue",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

// @ts-expect-error setProvider is not defined
Contract.setProvider(
  "wss://rinkeby.infura.io/ws/v3/2232166cec78439dbff035acfaf575ec"
);

const contract = new Contract(
  contractABI,
  "0x601C2B47793Ab8bcE46811A25b809D45ea3C4a86"
);

contract.methods.image(1, 2).call().then(console.log);

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
