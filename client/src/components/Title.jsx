import React from 'react';

export default function Title({ category, name }) {
  return (
    <div className="std-margin-tight std-padding">
      <div className="sm-text sm-padding">
        <span><a href="#" className='mini-link'>Purrget</a><span className='category-sep'>/</span></span>
        <span><a href="#" className='mini-link'>{category}</a></span>
      </div>
      <div>
        <h1 className="styled-heading">{name}</h1>
      </div>
      <div>
        <a href='#' className='mini-link' id='related-link'>Shop all Related</a>
      </div>
    </div>
  );
}