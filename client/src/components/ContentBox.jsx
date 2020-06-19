import React from 'react';

import Carousel from './Carousel.jsx';
import PriceColumn from './PriceColumn.jsx';
import PurchaseColumn from './PurchaseColumn.jsx';


export default function ContentBox({cat, mainImage, changeImage, likes}) {
  return(
    <div className='flex-row'>
      <Carousel images={cat.url} mainImage={mainImage} changeImage={changeImage} likes={likes}/>
      <PriceColumn />
      <PurchaseColumn />
    </div>
  )
}