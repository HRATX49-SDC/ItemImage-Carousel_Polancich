import React from 'react';
import styles from '../styles/price.css'

export default function PriceColumn({ price, currentQuantity,
  handleQuantityChange, questionCount, reviewCount }) {
  return (
    <div className={styles.priceColumn}>
      <div className={styles.priceBox}>
        {/* priceStyle displays price */}
        <div className={styles.priceStyle}>{`$${Number.parseFloat(price).toFixed(2)}`}</div>
        {/* ReveiwBox holds data for reveiws and question counts*/}
        <div className={styles.reviewBox}>
          <a
          href="#reviews" className={styles.priceLink}>
            {reviewCount === undefined ? 0 : reviewCount} reveiws
          </a>
          <a href="#about" className={styles.questionsLink}>
            {questionCount === undefined ? 0 : questionCount} questions
          </a>
        </div>
        {/* qunatityBox holds the Quantity Select dropdown menu */}
        <div className={styles.quantityBox}>
          <div className={styles.quantitySelect}>
            <div className={styles.quantityTitle}>Quantity</div>
            <select
            className={styles.quantityButton}
            value={currentQuantity}
            onChange={(e) => handleQuantityChange(e)}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}