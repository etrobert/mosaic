import React, { useEffect, useState } from "react";
import Contract from "web3-eth-contract";

import Mosaic from "./Mosaic";
import abi from "./abi.json";

import type { AbiItem } from "web3-utils";
import type { Image } from "./types";

import "./App.css";

// @ts-expect-error setProvider is not defined
Contract.setProvider(
  "wss://rinkeby.infura.io/ws/v3/2232166cec78439dbff035acfaf575ec"
);

const contract = new Contract(
  abi as AbiItem[],
  "0xF9f61dDa5D8152567D6F3e7586D4818Bf54A7B87"
);

function App() {
  const [image, setImage] = useState<Image>();

  useEffect(() => contract.methods.getImage().call().then(setImage), []);

  useEffect(() => console.log(image), [image]);

  return <div className="App">{image && <Mosaic image={image} />}</div>;
}

export default App;
