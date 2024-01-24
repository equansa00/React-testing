import "./App.css";
import Carousel from "./Carousel";
import photos from "./photos.js";

/** App component, renders Carousel
 * 
 * Props: none
 * State: none
 * 
 * App --> Carousel
 */
<h1>Hello, Carousel</h1>
function App() {
  console.log("App component rendering");
  // In real life, this data would probably come from an AJAX call.
  // For our purposes, we're just importing from another file.
  const carouselPhotos = photos;
  const carouselTitle = "Shells from far-away beaches";

  return (
    <div className="App">
      <Carousel photos={carouselPhotos} title={carouselTitle} />
    </div>
  );
}

export default App;
