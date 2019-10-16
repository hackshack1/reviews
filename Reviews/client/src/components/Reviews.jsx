import React from 'react'
import ReviewItem from './ReviewItem.jsx'


const Reviews = (props) => {
    return (
        <div>
            <div>
                {props.reviews.map((review,i)=>
                <ReviewItem review={review} key={i}/>)}
            </div>
        </div>
    )
}

export default Reviews;