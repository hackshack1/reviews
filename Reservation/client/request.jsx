import axios from 'axios';

const request = {
  getReservations: callback => {
    let id = window.location.href.split('/')[4];
    axios.get('/now', { params: { date: new Date(), id: id } }).then(result => {
      let listing = result.data[0];
      callback(listing);
    });
  }
};

export default request;
