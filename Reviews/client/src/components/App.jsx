import React from 'react';
import Axios from 'Axios';
import Reviews from './Reviews.jsx'


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
      console.log(res.data[0])
      this.setState({reviews:res.data[0].reviews})
    })
    .catch((err)=>{
      console.error(err)
    })
}


  render() {

    return (
      <div>
        <h1>Reviews</h1>
        <Reviews reviews={this.state.reviews}/>

      </div>
    )
  }
}

export default App;