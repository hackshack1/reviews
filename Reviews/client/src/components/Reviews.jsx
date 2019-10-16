import React from 'react'
import ReviewItem from './ReviewItem.jsx'
import styles from '../../styles/Reviews.css'

const Reviews = (props) => {
    return (
        <div className={styles.reviewsBox}>
            <div>
                {props.reviews.map((review,i)=>
                <ReviewItem review={review} key={i}/>)}
            </div>
        </div>
    )
}

export default Reviews;