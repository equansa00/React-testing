import React from "react";

function Coin({ side }) {
  const imageUrl = side === "heads" ? "p/home/equansa00/Desktop/UMass/react-state-carousel-coins (copy)/carousel/card-flipping-counter/CoinHead.jpg" : "/home/equansa00/Desktop/UMass/react-state-carousel-coins (copy)/carousel/card-flipping-counter/CoinTail.jpg";
  return <img src={imageUrl} alt={side} />;
}

export default Coin;
