import React, { useState } from "react";
import Coin from "./Coin";

function CoinFlipper() {
  const [currentSide, setCurrentSide] = useState(null);
  const [countHeads, setCountHeads] = useState(0);
  const [countTails, setCountTails] = useState(0);

  const flipCoin = () => {
    const isHeads = Math.random() < 0.5;
    setCurrentSide(isHeads ? "heads" : "tails");
    isHeads ? setCountHeads(count => count + 1) : setCountTails(count => count + 1);
  };

  return (
    <div>
      <h2>Let's flip a coin!</h2>
      {currentSide && <Coin side={currentSide} />}
      <button onClick={flipCoin}>Flip Coin</button>
      <p>Out of {countHeads + countTails} flips, there have been {countHeads} heads and {countTails} tails.</p>
    </div>
  );
}

export default CoinFlipper;