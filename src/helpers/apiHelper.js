module.exports = {
  submitGuess: function (id, guess, callback) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ guess: guess }),
    };
    fetch(`${process.env.REACT_APP_API_URL}/game/${id}/guess`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        callback(data);
      });
  },
  newGame: function (callback) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };
    fetch(`${process.env.REACT_APP_API_URL}/game`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        callback(data);
      })
      .catch((error) => {
        callback({ error: "Unable to connect..." });
      });
  },
};
