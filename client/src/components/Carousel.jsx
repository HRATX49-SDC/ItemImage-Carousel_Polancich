import React from 'react';

export default function Carousel(props) {
  return (
    <div id='carousel'>
      <div id='carousel-wrapper'>
        <div id='mutiple-image-wrapper'>
          <div className='carousel-items' id='image-legend'>
            <div id='legend-grid'>
              {/* map images here */}
            </div>
          </div>
          <div className='carousel-items' id='main-image'>
            {/* display main image here */}
          </div>
        </div>
      </div>
    </div>
  );
}