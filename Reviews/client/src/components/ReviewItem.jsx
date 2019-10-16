import React from 'react';


const ReviewItem = (props) => {
    return (
        <div>
            <div>

                <img src={props.review.customer.customerPhoto}></img>

                <div>
                    <div>{props.review.customer.customerName}</div>

                    <div>{props.review.bodyDate}</div>
                </div>

            </div>

            <div>
                <div>{props.review.body}</div>
            </div>
        </div>
    )
}

export default ReviewItem;