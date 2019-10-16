import React from 'react';
import Axios from 'Axios';
import Reviews from './Reviews.jsx'
import styles from '../../styles/App.css'


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
        <div className={styles.head}>
          <h1>Reviews</h1>
        </div>
        <div className={styles.main}>
          <Reviews reviews={this.state.reviews}/>
        </div>
      </div>
    )
  }
}

export default App;