import React from 'react';
import ReviewItem from './ReviewItem.jsx';
import styled from 'styled-components';

const ReviewsBox = styled.div`
    max-width: 594px;
    box-sizing: border-box;
    color: rgb(72, 72, 72);
    display: block;
    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
    font-size:14px;
    line-height: 20.02px;
    text-size-adjust: 100%;
    margin-top: 16px;
`;


const Reviews = (props) => {
    return (
        <div>
            <ReviewsBox>
                {props.reviews.map((review,i)=>
                <ReviewItem review={review} key={i}/>)}
            </ReviewsBox>
        </div>
    )
}

export default Reviews;