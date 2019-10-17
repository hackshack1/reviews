import React from 'react';
import styled from 'styled-components';

const RatingIcon = (props) => (<span>★</span>)

const RatingBox =styled.div`
display: flex;
justify-content: left;
`;

const Sprite = styled.div`
    display: flex;
    justify-content: left;
    unicode-bidi: bidi-override;
    color: rgb(0, 132, 137);
    font-size: 12px;
    height: 25px;
    width: 25px;
    margin: 0 auto;
    padding: 0;
    text-shadow: 0px 1px;
  `;
const AvgRating = styled.div`
    display: flex;
    justify-content: left;
    color: rgb(72, 72, 72);
    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
    font-size:14px;
    font-weight:500;
  `;


class Rating extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating:4.5,
        }
    }
    // componentDidMount(){
    //     this.calAvg();
    //   }


    // calAvg(){
    //     var reviews = this.props.reviews.slice()
    //     var checkIn = reviews[0].ratings.checkIn
    //     console.log('function is invoked')
    //     // this.setState({rating:checkIn})
    // }


    render() {
        return (
            <RatingBox>
                <div>
                    <Sprite><RatingIcon/></Sprite>
                </div>
                <div>
                    <AvgRating>{this.state.rating}</AvgRating>
                </div>
            </RatingBox>
        )
    }
}

export default Rating
