import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";

function Carousel({ photos }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  const prevCard = () => {
    setCurrCardIdx((currCardIdx - 1 + photos.length) % photos.length);
  };

  const nextCard = () => {
    setCurrCardIdx((currCardIdx + 1) % photos.length);
  };

  // Add a check to ensure currCardIdx is within the bounds of the photos array
  const currentPhoto = photos && photos.length > currCardIdx ? photos[currCardIdx] : null;

  if (!currentPhoto) {
    // You can render a placeholder or return null if the current photo is not available
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Card 
        caption={currentPhoto.caption} 
        src={currentPhoto.src} 
        currNum={currCardIdx + 1} 
        totalNum={photos.length} 
      />
      
      {currCardIdx > 0 && <button onClick={prevCard}>Previous</button>}
      {currCardIdx < photos.length - 1 && <button onClick={nextCard}>Next</button>}
    </div>
  );
}

export default Carousel;
