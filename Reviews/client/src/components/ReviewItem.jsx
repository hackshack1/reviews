import React from 'react';
import styles from '../../styles/ReviewItem.css'

const ReviewItem = (props) => {
    return (
        <div className={styles.reviewBox}>
            <div className={styles.profileBox}>

                <img className={styles.customerPhoto}src={props.review.customer.customerPhoto}></img>

                <div>
                    <div className={styles.customerName}>{props.review.customer.customerName}</div>

                    <div className={styles.date}>{props.review.bodyDate}</div>
                </div>

            </div>

            <div className={styles.bodyBox}>
                <div className={styles.body}>{props.review.body}</div>
            </div>
        </div>
    )
}

export default ReviewItem;