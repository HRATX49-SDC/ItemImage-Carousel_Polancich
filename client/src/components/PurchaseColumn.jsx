import React from 'react';
import styles from '../styles/purchase.css'

export default function PurchaseColumn({ handlePurchase }) {
  return (
    <div className={styles.purchaseColumn}>
      <div className={styles.fulfillmentBoxes}>
        <div className={styles.flexRow}>
          <div className={styles.halfColPaddingRight}>
            <span className={styles.darkGreenBold}>Pick Up Today</span>
            <span> at </span>
            <span className={styles.darkLinkBold}> Austin Saltillo</span><br></br>
            <div className={styles.stdMarginBot}>
              <a href="#" className={styles.miniLink}>Edit Store</a>
            </div>
          </div>
          <div className={styles.halfColPaddingLeft}>
            <button className={styles.redButton} onClick={handlePurchase}>Pick it up</button>
          </div>
          <div className={styles.readyIn}>Ready in 4 hours for pickup inside the store.</div>
          <div className={styles.aisle}>Aisle 1</div>
        </div>
      </div>
      <div className={styles.deliveryBox}>
        <div className={styles.flexRow}>
          <div className={styles.halfColPaddingRight}>
            <span className={styles.darkGreenBold}>Same Day Delivery</span>
            <span> to </span>
            <span className={styles.darkBold}> 78741</span><br></br>
            <div className={styles.stdMarginBot}>
              <a href="#" className={styles.miniLink}>Edit Zip Code</a>
            </div>
          </div>
          <div className={styles.halfColPaddingLeft}>
            <button className={styles.redButton} onClick={handlePurchase}>Deliver it</button>
          </div>
          <div className={styles.mediumText}>
            <span className={styles.darkGreenMargin}>Get it as soon as 9am tomorrow </span>
            <span>with Shipt</span>
            <div className={styles.darkMargin}>Delivery windows are in high demand and can change quickly</div>
            <div className={styles.smallText}>Free with membership or $9.99/order</div>
          </div>
          <div className={styles.learn}>Learn more</div>
        </div>
      </div>
    </div>
  )
}