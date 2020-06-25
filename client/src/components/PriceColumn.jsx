import React from 'react';
import styles from '../styles/price.css'

export default function PriceColumn({ price, currentQuantity, handleQuantityChange }) {
  return (
    <div className={styles.priceColumn}>
      <div className={styles.priceBox}>
        <div className={styles.priceStyle}>{`$${Number.parseFloat(price).toFixed(2)}`}</div>
        <div className={styles.reviewBox}>
          <a href="#" className={styles.priceLink}>12 reveiws</a>
          <a href="#" className={styles.questionsLink}>2 questions</a>
        </div>
        <div className={styles.quantityBox}>
          <div className={styles.quantitySelect}>
            <div className={styles.quantityTitle}>Quantity</div>
            <button className={styles.quantityButton} value={currentQuantity} onChange={(e) => handleQuantityChange(e)}>
              <div>1</div>
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false">
                <defs>
                  <path id="nds-Icon85a" d="M9.06 12.5l7.47-7.47-1.06-1.06-8.53 8.53 8.53 8.53 1.06-1.06z"></path>
                </defs>
                <use transform="scale(1 -1) rotate(90 24.235 0)"></use>
              </svg>
              {/* <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option> */}
            </button>
            <button>
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false">
                <defs>
                  <path id="nds-Icon85a" d="M9.06 12.5l7.47-7.47-1.06-1.06-8.53 8.53 8.53 8.53 1.06-1.06z"></path>
                </defs>
                <use transform="scale(1 -1) rotate(90 24.235 0)"></use>
            </svg>
            </button>
          </div>
          {/* <i className="gg-chevron-down"></i> */}
        </div>
      </div>
    </div>
  )
}