import React from 'react';
import axios from 'axios';
import Listings from './Listings.jsx';


class HomesRecommendation extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currIndex: 0,
      pageListings:[],
      allListings: [],
      carousel1: [],
      carousel2: [],
      carousel3: []
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
    const threeListings = this.state.allListings.slice(newIndex, newIndex+3);
    this.setState({pageListings: threeListings, currIndex:newIndex});
  }

  prevThree (event) {
    // event.preventDefault();
    const newIndex = this.state.currIndex-1;
    const threeListings = this.state.allListings.slice(newIndex, newIndex+3);
    this.setState({pageListings: threeListings, currIndex:newIndex});
  }



  render() {
    return (
      <div>
        <button id="outterLeftArrow" onClick={() => this.prevThree()} disabled={this.state.currIndex===0}></button>
        <Listings pageListings={this.state.pageListings}/>
        <button id="outterRightArrow" onClick={()=>this.nextThree()} disabled={this.state.currIndex === this.state.allListings.length-1}></button>
      </div>
    );
  }
}

export default HomesRecommendation;