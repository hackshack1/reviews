import React from 'react';
import axios from 'axios';
import Listings from './Listings.jsx';
import styled from 'styled-components';



const MainWrapper = styled.div`
  font-family: Helvetica Neue, sans-serif;
  text-align: center;
  border: 1px solid yellow;
  height: 420px;
  // flex-direction: row;
  // flex:1;
`;
const PrevDiv = styled.div`
  position: absolute;
  margin: auto;
  height:420px;


`;
const PrevButton = styled.button`
  animation: slide 0.5s forwards; 
  position: absolute;
  font-family: 'Nanum Myeongjo', serif;
  text-align: center;
  top: 50%;
`;

// const PrevButton:after 
const Container = styled.div`
  width: 915px;
  height:420px;
  border: 1px dashed yellow;
  display: inline-block;
  overflow: hidden;
  @media(max-width: 992px) {
    width:600px;
  }
`
const ListingsDiv = styled.div`
  position:relative;
  // border: 1px solid red;
  height: 350px;
`;
const NextDiv = styled.div`
position: absolute;
display:inline-block
text-align: right;
top:50%;
border: 2px solid red;
// margin: auto;
height:420px;
`;

const NextButton = styled.button`
  animation: slide 0.5s forwards; 
  position: absolute;
  font-family: 'Nanum Myeongjo', serif;
  text-align: center;
  top:50%;


`;

const Title = styled.h2`
  text-align: left;
  padding-left:7.5px;

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
          <PrevButton id="outterLeftArrow" onClick={() => this.prevThree()} disabled={this.state.currIndex===0}> &#8249; </PrevButton>
        </PrevDiv>
        <Container>
          <Title>More homes you may like</Title>
          <ListingsDiv>

          <Listings allListings={this.state.allListings} currIndex={this.state.currIndex}/>
          </ListingsDiv>
        </Container>
        <NextDiv>   
          <NextButton id="outterRightArrow" onClick={()=>this.nextThree()} disabled={this.state.currIndex === this.state.allListings.length-3}> &#8250; </NextButton>
        </NextDiv>
      </MainWrapper>
    );
  }
}

export default HomesRecommendation;

// &#8250;