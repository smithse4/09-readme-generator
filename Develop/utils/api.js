const axios = require("axios");

const api = {
  async getUser(answer) {
    const queryUrl = `https://api.github.com/users/${answer.userName}`;
    axios
      .get(queryUrl)
      .then(function(response) {
        console.log('?????????????', response.data)
        return response.data.avatar_url;

      })
      .catch(err => {
        console.log(err);
        return err
      });
  }
};

module.exports = api;
