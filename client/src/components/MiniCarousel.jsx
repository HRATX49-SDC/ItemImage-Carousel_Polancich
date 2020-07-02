import React from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
// import carouselStyles from '@brainhubeu/react-carousel/lib/style.css';

import styles from '../styles/carousel.css';

export default function MiniCarousel({ images, mainImage, changeImage, likes, toggleLike}) {
  //if the search component isnt present, change the styling so the like button is in the correct spot
  let isSolo = document.getElementById('search') === null;

  return (
    <div className={styles.miniCarouselWrapper}>
      <Carousel
        value={mainImage}
        onChange={() => {return}}
        centered
        dots
        slidesPerPage={1}
        >
        {/* Inside the carousel, map the images */}
        {images.map((image, index) => {
          return <img className={styles.miniCarouselImages} index={index} key={index} src={image} />
        })}
      </Carousel>

      <button className={isSolo ? styles.miniCarouselLikeSolo : styles.miniCarouselLike} onClick={toggleLike}>
            <i className={styles.ggCircle}></i>
            <i className={`${styles.ggHeart} ${likes[mainImage] ? `${styles.redFill}` : ''}`}></i>
      </button>
    </div>
  );

}
