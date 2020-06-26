import React from 'react';
import styles from '../styles/purchase.css';
import Improve from './Improve.jsx';

export default function PurchaseColumn({ handlePurchase, displayImprove, toggleImprove }) {
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
      <div className={styles.curbsideBox}>
        <div className={styles.curbsideContent}>
          <div className={styles.curbside}>
            <span className={styles.carIcon}>
              <div className={styles.full}>
                <svg width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false"><g fill="none" fillRule="evenodd"><path d="M3.45 18.36c.45.43 1.11.62 2.17.62h1.93v2.36c-.04.5-.94.91-2.05.91-1.1 0-2-.4-2.04-.9l-.01-.01zm17.11 0v2.98h-.01c-.04.51-.94.91-2.04.91-1.11 0-2-.4-2.04-.9l-.01-.01v-2.36h1.93c1.06 0 1.72-.2 2.17-.62z" fill="#333"></path><path d="M4.7 5.76c3.2-1.78 11.4-1.78 14.6 0l1 3.34H23v.76c0 .76-.62 1.38-1.38 1.38h-.33c1.15 2.75.5 7.12-.74 8.04H3.45c-1.37-.92-1.88-5.3-.73-8.04h-.33c-.77 0-1.39-.62-1.39-1.38V9.1h2.7zm-.35-2.2c3.43-1.9 11.88-1.9 15.3 0l-.18.3c-.28.53-.9.76-1.46.56-3.19-1.1-8.86-1.1-12.02 0a1.2 1.2 0 01-1.46-.55z" fill="#C00"></path><path d="M6.5 6.99c-1.24 2.74-1.45 7.44-.67 10.3h12.35c.92-2.97.5-7.56-.67-10.3-2.14-1-8.96-1.03-11.02 0" fill="#FFF"></path><path d="M17.5 16.42c.43-2.56.3-5.4-.32-7.85-.29-.03-.57-.08-.84-.1 0 0-.38-1.21-1.76-1.31A2.1 2.1 0 0012.6 8.2h-1.2s-.48-1.16-1.96-1.04c-1.36.1-1.78 1.3-1.78 1.3l-.83.11a19.53 19.53 0 00-.32 7.85H17.5z" fill="#333"></path><path d="M4.04 12.78c.25-.15.57.04.55.33-.06.69-.1 1.9.1 3.2a.47.47 0 01-.58.51c-1.52-.41-.94-3.5-.07-4.04zm15.38.33a.36.36 0 01.54-.33c.87.54 1.45 3.63-.07 4.04a.46.46 0 01-.58-.52c.2-1.28.16-2.5.1-3.19z" fill="#7F0000"></path><path d="M12 9.07a3.22 3.22 0 011.72.5l.14.08a3.25 3.25 0 11-3.72 0l.14-.08a3.24 3.24 0 011.72-.5zm.02 1.09h-.04a2.16 2.16 0 10.04 0zM12 11.18a1.12 1.12 0 110 2.24 1.12 1.12 0 110-2.24z" fill="#FFF"></path></g></svg>
              </div>
            </span>
            <h2 className={styles.curbHeader}>Looking for curbside pickup?</h2>
          </div>
          <div>
            <a className={styles.curbLink} href="#">Try our free Drive Up service</a>
            <span>, available only in the Target App.</span>
          </div>
        </div>
      </div>
      <div className={styles.flexRow}>
        <div className={styles.registryContainer}>
          <button className={styles.registryButton}>
            <span className={styles.registrySVGBox}>
              <div className={styles.full}>
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false"><g fill="none" fillRule="evenodd"><path d="M21.5 7v3.25h-1V22.5h-17V10.25h-1V7h19z" fill="#C00"></path><path d="M20.5 10.25v1.25h-17v-1.25h17zm-7.082-7.739c.694-.772 1.746-1.143 2.739-.969A2.505 2.505 0 0118.086 3.1a2.944 2.944 0 01-.17 2.56c-.411.712-1.091 1.184-1.866 1.292-.327.045-.652.043-.935.045L14.829 7h-.159c-.38 0-1.332-.007-2.064-.013-.194 0-.365-.003-.512-.003h-.11c-.155.001-.356.003-.588.003-.793.006-1.848.013-2.15.013h-.074l-.286-.003c-.287 0-.608 0-.933-.044-.777-.109-1.458-.58-1.868-1.293a2.944 2.944 0 01-.171-2.56 2.508 2.508 0 011.93-1.558c.994-.173 2.045.198 2.738.97.439.49.924 1.09 1.418 1.746.494-.656.979-1.256 1.418-1.747zm2.449.69c-.421-.072-.891.097-1.195.434-.42.467-.883 1.04-1.36 1.673l1.488.007.316-.002c.26.004.492.001.7-.029.257-.035.49-.205.642-.465.186-.325.21-.73.068-1.087a.822.822 0 00-.66-.53zm-7.592-.015l-.142.015a.821.821 0 00-.658.532c-.145.355-.12.761.068 1.086.089.152.289.416.643.466.208.028.448.028.698.028l.319.002c.084-.002.778-.003 1.485-.007a26.23 26.23 0 00-1.36-1.673c-.304-.338-.772-.508-1.195-.434z" fill="#840000"></path><path d="M12 13.25c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5-3.5-1.57-3.5-3.5 1.57-3.5 3.5-3.5zm0 1.166l-.16.005a2.333 2.333 0 00.16 4.662l.16-.005a2.333 2.333 0 00-.16-4.662zm0 1.167a1.166 1.166 0 110 2.333 1.166 1.166 0 010-2.333z" fill="#FFF"></path></g></svg>
              </div>
            </span>
            <span className={styles.stdMarginLeft}>Add to registry</span>
          </button>
        </div>
      </div>
      <Improve displayImprove={displayImprove} toggleImprove={toggleImprove}/>
    </div>
  )
}