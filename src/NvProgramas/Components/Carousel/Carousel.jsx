import React, { useState } from 'react';
import './Carousel.css';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button className="carousel-button" id="carouselPrev" onClick={handlePrev}>
        ⬅️
      </button>
      <div className="carousel-images" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Slide ${index}`}
            className="carousel-image"
          />
        ))}
      </div>
      <button className="carousel-button" id="carouselNext" onClick={handleNext}>
        ➡️
      </button>
    </div>
  );
};

export default Carousel;
