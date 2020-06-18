import React from 'react';

export default function Carousel({images, mainImage}) {
  return (
    <div id='carousel'>
      <div id='carousel-wrapper'>
        {/* <div id='mutiple-image-wrapper'> */}
          <div className='carousel-items' id='image-legend'>
            <div id='legend-grid'>
              {images.map((image, index) => {
                return (
                  <button key={index} className="image-button">
                    <img id={index} src={image} className='thumbnail'/>
                  </button>
                );
              })}
            </div>
          </div>
          <div className='carousel-items' id='main-image'>
            <img id='#main-img' src={images[mainImage]} />
          </div>
        {/* </div> */}
      </div>
    </div>
  );
}