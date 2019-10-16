import React from 'react';

const ReviewItem = (props) => {
    return (
        <div>
            <div>{props.review.customer.customerName}</div>
            <img src={props.review.customer.customerPhoto}></img>
            <div>{props.review.body}</div>
            <div>{props.review.bodyDate}</div>
        </div>
    )
}

export default ReviewItem;