import React from 'react';
import styles from '../styles/carousel.css';

export default function Carousel({ images, mainImage, changeImage, likes, toggleLike}) {
  return (

    <div className={styles.carousel}>
      <div className={styles.carouselWrapper}>
        <div className={styles.imageLegend}>
          <div id={styles.imageGrid}>
            {images.map((image, index) => {
              return (
                <button key={index} className={styles.imageButton} onClick={(e) => changeImage(e)}>
                  <img src={image} id={index} className={styles.thumbnail} />
                </button>
              );
            })}
          </div>
        </div>
        <div className={styles.mainImage}>
          <img className={styles.image} src={images[mainImage]} />
          <button className={styles.likeButton} onClick={toggleLike}>
            <i className={styles.ggCircle}></i>
            <i className={`${styles.ggHeart} ${likes[mainImage] ? `${styles.redFill}` : ''}`}></i>
          </button>
        </div>
      </div>
    </div>
  );
}