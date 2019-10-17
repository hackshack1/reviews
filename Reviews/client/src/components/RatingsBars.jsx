import React from 'react';
import styled from 'styled-components';

const RatingBox = styled.div`
    display: flex;
    flex-direction: row;
`;

const RatingBarBoxLeft =styled.div`
    display: flex;
    flex-direction: column;
    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
    font-size:12px;
`;

const RatingBarBoxRight =styled.div`
    display: flex;
    flex-direction: column;
    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
    font-size:12px;
`;

const RatingNameLine = styled.div`

`;

const RatingsBarStyle = styled.div`
    height: 3px;
    width: 80px;
    border: 1px solid #333;
  `;

const BarFiller = styled.div`
    background: #1DA598;
    height: 100%;
    border-radius: inherit;
    transition: width .2s ease-in;
  `;


  class RatingsBars extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        percentage: 80
      }
    }



    render() {
      return (
          <RatingBox>
            <RatingBarBoxLeft>
                <RatingNameLine>
                    <div>Accuracy</div>
                    <RatingsBarStyle><BarFiller style={{ width: `${this.state.percentage}%` }}></BarFiller></RatingsBarStyle>
                </RatingNameLine>

                <RatingNameLine>
                    <div>Cleanliness</div>
                    <RatingsBarStyle><BarFiller style={{ width: `${this.state.percentage}%` }}></BarFiller></RatingsBarStyle>
                </RatingNameLine>

                <RatingNameLine>
                    <div>Communication</div>
                    <RatingsBarStyle><BarFiller style={{ width: `${this.state.percentage}%` }}></BarFiller></RatingsBarStyle>
                </RatingNameLine>
            </RatingBarBoxLeft>

            <RatingBarBoxRight>
                <RatingNameLine>
                        <div>Location</div>
                        <RatingsBarStyle><BarFiller style={{ width: `${this.state.percentage}%` }}></BarFiller></RatingsBarStyle>
                    </RatingNameLine>

                    <RatingNameLine>
                        <div>Value</div>
                        <RatingsBarStyle><BarFiller style={{ width: `${this.state.percentage}%` }}></BarFiller></RatingsBarStyle>
                    </RatingNameLine>

                    <RatingNameLine>
                        <div>Check-in</div>
                        <RatingsBarStyle><BarFiller style={{ width: `${this.state.percentage}%` }}></BarFiller></RatingsBarStyle>
                    </RatingNameLine>
            </RatingBarBoxRight>
          </RatingBox>
      )
    }
  }

  export default RatingsBars;