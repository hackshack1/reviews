import React from 'react';
import Axios from 'Axios';
import Reviews from './Reviews.jsx';
import styled from 'styled-components';
import Rating from './Rating.jsx'
import RatingsBars from './RatingsBars.jsx'
import SearchBar from './SearchBar.jsx'


const Wrapper = styled.div`
  display: flex;
  justify-content: center;

`;
const SpecsContainer = styled.div`
  max-width: 525px;
  box-sizing: border-box;

`;

const Head = styled.div`
  display: flex;
  justify-content: left;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.25em;
  color: #484848;
  padding-top: 2px;
  padding-bottom: 2px;
`;
const RatingSearchBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      commsAvg:0,
      checkAvg:0,
      locAvg:0,
      accAvg:0,
      cleanAvg:0,
      valueAvg:0,
      avg:0,

    }
  }

  componentDidMount(){
    this.getData();
  }

  getData(){
    Axios.get('/reviews')
      .then((res)=>{
        var reviews = res.data[0].reviews
        var commsArr = reviews.map((review) => review.ratings.communication);
        var checkArr = reviews.map((review) => review.ratings.checkIn);
        var locationArr = reviews.map((review) => review.ratings.location);
        var accArr = reviews.map((review) => review.ratings.accuracy);
        var cleanArr = reviews.map((review) => review.ratings.cleanliness);
        var valArr = reviews.map((review) => review.ratings.value);
        var comms = commsArr.reduce((acc,cur)=>(acc+cur))/reviews.length;
        var check = checkArr.reduce((acc,cur)=>(acc+cur))/reviews.length;
        var loc = locationArr.reduce((acc,cur)=>(acc+cur))/reviews.length;
        var acc = accArr.reduce((acc,cur)=>(acc+cur))/reviews.length;
        var clean = cleanArr.reduce((acc,cur)=>(acc+cur))/reviews.length;
        var value = valArr.reduce((acc,cur)=>(acc+cur))/reviews.length;
        var average = (comms + check + loc + acc + clean + value)/6
        this.setState({
          reviews:res.data[0].reviews,
          commsAvg:comms,
          checkAvg:check,
          locAvg:loc,
          accAvg:acc,
          cleanAvg:clean,
          valueAvg:value,
          avg:average,
        })
      })
      .catch((err)=>{
        console.error(err)
      })
  }

  render() {
    if(this.state.reviews.length === 0){
      return (
        <div></div>
        )
      }else{
        console.log(this.state.commsAvg)
        return (
        <Wrapper>
          <div>
            <SpecsContainer>
              <Head>Reviews</Head>
              <br></br>
              <RatingSearchBarContainer>
                <Rating reviews={this.state}/>
                <SearchBar/>
              </RatingSearchBarContainer>
              <br></br>
              <RatingsBars reviews={this.state}/>
            </SpecsContainer>
            <br></br>
            <Reviews reviews={this.state.reviews}/>
          </div>
        </Wrapper>
      )
    }
  }
}

export default App;