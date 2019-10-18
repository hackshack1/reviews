import React from 'react';
import axios from 'axios';
import Listings from './Listings.jsx';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-family: Helvetica Neue, sans-serif;
  position: relative;
  width: 1050px;
  height: 400px;
  text-align: center;
`;
const Button = styled.button`
  animation: slide 0.5s forwards; 
  position: absolute;
`;

const Title = styled.h5`
  text-align: left
`
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
      <Wrapper>
        <Title>More homes you may like</Title>
        <Button id="outterLeftArrow" onClick={() => this.prevThree()} disabled={this.state.currIndex===0}>PREVIOUS</Button>
        <br></br>
        <Listings allListings={this.state.allListings} currIndex={this.state.currIndex}/>
        <Button id="outterRightArrow" onClick={()=>this.nextThree()} disabled={this.state.currIndex === this.state.allListings.length-3}>NEXT</Button>
      </Wrapper>
    );
  }
}

export default HomesRecommendation;