import React from 'react';
import Listing from './Listing.jsx'

function Listings (props) {
  return (
    <div>
      {props.pageListings.map(listing => <Listing listing={listing} />)}
    </div>
  )
}

export default Listings;