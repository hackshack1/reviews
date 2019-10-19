import React from 'react';
import axios from 'axios';
import Listings from './Listings.jsx';
import styled from 'styled-components';

const MainWrapper = styled.div`
  font-family: Helvetica Neue, sans-serif;
  text-align: center;
  border: 1px solid yellow;
  height: 420px;
`;
const PrevDiv = styled.div`
  position: absolute;

`;
const PrevButton = styled.button`
  animation: slide 0.5s forwards; 
  text-align: left;
  position: absolute;
`;
const Container = styled.div`
  width: 900px;
  height:420px;
  border: 1px dashed grey;
  display: inline-block;
  overflow: hidden;
`
const ListingsDiv = styled.div`
  position:relative;
  border: 1px solid red;
  height: 350px;
`;
const NextDiv = styled.div`
position: absolute;

`;

const NextButton = styled.button`
  animation: slide 0.5s forwards; 
  position: absolute;
  text-align: right;

`;

// const LeftBox = styled.div`
//   position: absolute;
//   width: 300px;
//   height: 300px;
//   z-index: 3;
// `;

// const RightBox = styled.div`
//   position: absolute;
//   width: 300px;
//   height: 300px;
//   z-index: 2;
// `;

const Title = styled.h5`
  text-align: left;
  padding-left: 200px;
`;
class HomesRecommendation extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currIndex: 0,
      allListings: [],
      pic1: []
    }
    this.nextThree = this.nextThree.bind(this);
    this.prevThree = this.prevThree.bind(this);
    // this.currentThreeListings = this.currentThreeListings.bind(this);
  }



  componentDidMount () {
    axios.get("/allHomes").then((res) => this.setState({allListings: res.data, pageListings: res.data.slice(0,3)}));
    // console.log(this.state.allListings)
  }

  // refreshThreeListings () {
  //   const threeListings = this.state.allListings.slice(0, 3);
  //   this.setState({pageListings: threeListings});
  // }

  nextThree (event) {
    // event.preventDefault();
    const newIndex = this.state.currIndex+1;
    this.setState({currIndex:newIndex});
    // const threeListings = this.state.allListings.slice(newIndex, newIndex+3);
    // this.setState({pageListings: threeListings, currIndex:newIndex});
  }

  prevThree (event) {
    // event.preventDefault();
    const newIndex = this.state.currIndex-1;
    // const threeListings = this.state.allListings.slice(newIndex, newIndex+3);
    this.setState({currIndex:newIndex});
    // this.setState({pageListings: threeListings, currIndex:newIndex});
  }



  render() {
    return (
      <MainWrapper>
          <PrevDiv className="innerdiv">
            <PrevButton id="outterLeftArrow" onClick={() => this.prevThree()} disabled={this.state.currIndex===0}>PREVIOUS</PrevButton>
          </PrevDiv>
        <Container>
          <Title>More homes you may like</Title>
          <ListingsDiv>

          <Listings allListings={this.state.allListings} currIndex={this.state.currIndex}/>
          </ListingsDiv>
        </Container>
          <NextDiv>   
            <NextButton id="outterRightArrow" onClick={()=>this.nextThree()} disabled={this.state.currIndex === this.state.allListings.length-3}>NEXT</NextButton>
          </NextDiv>
      </MainWrapper>
    );
  }
}

export default HomesRecommendation;