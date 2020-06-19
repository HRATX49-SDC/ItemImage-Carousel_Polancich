import React from 'react';

export default function PriceColumn(props) {
  return (
    <div className="column-1-4" id="price-column">
      <div id="price-box">
        <div id="price-styling">$1.99</div>
        <div id="price-reviews">
          <a href="#" className="price-link">12 reveiws</a>
          <a href="#" className="price-link" id="questions-link">2 questions</a>
        </div>
        <div className="quantity-box">
          <div id="quantity-select">
            <div id="quantity-title">Quantity</div>
            <select id="quantity-button" className="dotted-outline" expanded="false">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
          <i className="gg-chevron-down"></i>
        </div>
      </div>
    </div>
  )
}