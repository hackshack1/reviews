import React from 'react';

function Listing (props) {
  return (
    <div >
      <img src={props.listing.picture} alt="TESTING PICTURE"></img>
      <p> {props.listing.homeType} • {props.listing.cityName}</p>
      <p>{props.listing.title}</p>
      <p>${props.listing.price}/night</p>
      {/* <image star/> */}
      <p>{props.listing.rating} ({props.listing.reviewCount})</p>
      
    </div>
  )
}

export default Listing;