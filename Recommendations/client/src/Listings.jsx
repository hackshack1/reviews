import React from 'react';
import Listing from './Listing.jsx'
import styled from 'styled-components';

const MainSlider = styled.div`
  position: left;
  max-width: 113px;
`
const Wrapper = styled.div`
  display: flex;
  position: absolute;
  transition: transform 300ms;
  // border:0.2px dashed green;
`
// cubic-bezier(0.455, 0.03, 0.515, 0.955);
function Listings (props) {
  return (
    <MainSlider className="inner">
      <Wrapper style={{'transform': `translateX(-${props.currIndex*(100/props.allListings.length)}%)`}}>
      {props.allListings.map(listing=> <Listing listing={listing} handlePopup={props.handlePopup}/>)}
      </Wrapper>

    </MainSlider>
  )
}

export default Listings;

