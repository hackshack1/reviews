import React from 'react';
import Axios from 'Axios';
import Reviews from './Reviews.jsx';
import styled from 'styled-components';
import Rating from './Rating.jsx'
import RatingsBars from './RatingsBars.jsx'


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    }
  }

componentDidMount(){
  this.getData();
}

getData(){
  Axios.get('/reviews')
    .then((res)=>{
      // console.log(res.data[0])
      this.setState({reviews:res.data[0].reviews})
    })
    .catch((err)=>{
      console.error(err)
    })
}


  render() {
    return (
      <Wrapper>
        <div>
          <Head>Reviews</Head>
          <Rating reviews={this.state.reviews}/>
          <RatingsBars/>
          <br></br>
          <Reviews reviews={this.state.reviews}/>
        </div>
      </Wrapper>
    )
  }
}

export default App;