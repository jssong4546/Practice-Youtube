//const fetch = require('node-fetch');

export const searchYouTube = ({ query, max, key }, callback) => {
  console.log(key);
  fetch(
    `https://www.googleapis.com/youtube/v3/search?q=${query}&maxResults=${max}&part=snippet&key=${key}`
  )
    .then((res) => res.json())
    .then((el) => {
      console.log(el.items);
      callback(el.items);
    });
};
