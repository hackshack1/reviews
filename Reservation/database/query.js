//to find reservation for that certain month
Reservation.findAll({
  where: db.where(db.fn('month', db.col('checkIn')), '11')
}).then(data => {
  data.map(ele => {
    console.log(ele.toJSON());
  });
});
