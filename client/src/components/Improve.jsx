import React from 'react';
import styles from '../styles/purchase.css';

export default function Improve({ displayImprove, toggleImprove }) {
  if(displayImprove) {
    return (
      <div className={styles.improveForm}>
        <form onSubmit={(e) => { toggleImprove(e) }}>
          <h3 className={styles.impHeader}>What brings you here today?</h3>
          <div className={styles.checkboxRow}>
            <label className={styles.label} htmlFor='checkAvailabilityBeforeStoreTrip'>
              <input type="checkbox" id='checkAvailabilityBeforeStoreTrip' name='checkAvailabilityBeforeStoreTrip' className={styles.checkbox} />
              <div className={styles.checkboxLabel}>checking availability before a store trip</div>
            </label>
          </div>
          <div className={styles.checkboxRow}>
            <label className={styles.label} htmlFor='buyOnlineAndPickupStore'>
              <input type="checkbox" id='buyOnlineAndPickupStore' name='buyOnlineAndPickupStore' className={styles.checkbox} defaultChecked={false}/>
              <div className={styles.checkboxLabel}>buying online & picking up at the store</div>
            </label>
          </div>
          <div className={styles.checkboxRow}>
            <label className={styles.label} htmlFor='buyOnlineAndGetShipped'>
              <input type="checkbox" id='buyOnlineAndGetShipped' name='buyOnlineAndGetShipped' className={styles.checkbox} />
              <div className={styles.checkboxLabel}>buying online & having it shipped</div>
            </label>
          </div>
          <div className={styles.checkboxRow}>
            <label className={styles.label} htmlFor='otherReasons'>
              <input type="checkbox" id='otherReasons' name='otherReasons' className={styles.checkbox} />
              <div className={styles.checkboxLabel}>other</div>
            </label>
          </div>
          <h3 className={styles.impHeader}>How could we improve?</h3>
          <div className={styles.inputWrapper}>
            <label className={styles.inputLabel}>your feedback</label>
            <textarea className={styles.feedbackDetails} type='text' maxLength='200' rows="4"></textarea>
          </div>
          <div className={styles.feedbackCaption}>Choose the answer that best describes why</div>
          <div className={styles.inputButtonWrapper}>
            <input className={styles.inputButton} id="feedbackSubmit" type="submit" value="submit" />
          </div>
        </form>
      </div>
    )
  } else {
    return (
      <div className={styles.improve}>
        <a href="#" className={styles.improveLink} onClick={ (e) => { toggleImprove(e) }}>Help us improve this page</a>
      </div>
    )
  }
}