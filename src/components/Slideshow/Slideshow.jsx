import { useState } from "react";
import "./Slideshow.scss";
import arrow from "../../assets/arrow.svg";

function Slideshow({ pictures, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function previousSlide() {
    if (currentIndex === 0) {
      setCurrentIndex(pictures.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }

  function nextSlide() {
    if (currentIndex === pictures.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }

  return (
    <div className="slideshow">
      <img src={pictures[currentIndex]} alt={title} />
      {pictures.length > 1 && (
        <>
          <button className="slideshow-previous" onClick={previousSlide}>
            <img src={arrow} alt="Image précédente" />
          </button>
          <button className="slideshow-next" onClick={nextSlide}>
            <img src={arrow} alt="Image suivante" />
          </button>
          <span className="slideshow-counter">
            {currentIndex + 1}/{pictures.length}
          </span>
        </>
      )}
    </div>
  );
}

export default Slideshow;
