import React from 'react'
import ReviewItem from './ReviewItem.jsx'

const Reviews = (props) => {
    return (
        <ul>
            {props.reviews.map((review,i)=>
            <ReviewItem review={review} key={i}/>)}
        </ul>
    )
}

export default Reviews;