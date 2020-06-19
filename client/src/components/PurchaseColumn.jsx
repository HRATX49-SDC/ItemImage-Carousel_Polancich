import React from 'react';

export default function PurchaseColumn({ handlePurchase }) {
  return (
    <div className="column-1-4" id="purchase-column">
      <div className="fulfillment-boxes">
        <div className="flex-row">
          <div className="column-1-2 tiny-padding-right">
            <span className="dark-green-bold">Pick Up Today</span>
            <span> at </span>
            <span className="mini-link dark-bold"> Austin Saltillo</span><br></br>
            <div className="std-margin-bottom">
              <a href="#" className="sm-text mini-link">Edit Store</a>
            </div>
          </div>
          <div className="column-1-2 tiny-padding-left">
            <button className="red-button" onClick={handlePurchase}>Pick it up</button>
          </div>
          <div className="md-text full-width">{'Ready in 4 hours for pickup inside the store. \n'}</div>
          <div className="sm-text tiny-margin-top">Aisle 1</div>
        </div>
      </div>
      <div className="fulfillment-boxes" id="delivery-box">
        <div className="flex-row">
          <div className="column-1-2 tiny-padding-right">
            <span className="dark-green-bold">Same Day Delivery</span>
            <span> to </span>
            <span className="dark-bold"> 78741</span><br></br>
            <div className="std-margin-bottom">
              <a href="#" className="sm-text mini-link">Edit Zip Code</a>
            </div>
          </div>
          <div className="column-1-2 tiny-padding-left">
            <button className="red-button" onClick={handlePurchase}>Deliver it</button>
          </div>
          <div className="md-text">
            <span className="dark-green-margin">Get it as soon as 9am tomorrow </span>
            <span>with Shipt</span>
            <div className="dark-margin">Delivery windows are in high demand and can change quickly</div>
            <div className="sm-text">Free with membership or $9.99/order</div>
          </div>
          <div className="sm-text tiny-margin-top mini-link">Learn more</div>
        </div>
      </div>
    </div>
  )
}