module.exports = (app) => {
  app.dataSources.mongo.automigrate('user', (err) => {
    if (err) throw err;

    const users = [{
      name: "Average Joe",
      _ratings: [...Array(5).keys()].map(rating => {
        return {value: getRandomRating()}
      })
    }, {
      name: "John Doe",
      _ratings: [...Array(5).keys()].map(rating => {
        return {value: getRandomRating()}
      })
    }, {
      name: "Alice Avalance",
      _ratings: [...Array(5).keys()].map(rating => {
        return {value: getRandomRating()}
      })
    }];

    app.models.user.create(users, (err, users) => {
      if (err) throw err;
      console.log('Models created: ', JSON.stringify(users, null, 2));
    });

  });
};

function getRandomRating() {
  return Math.floor(Math.random() * 5) + 1;
}
