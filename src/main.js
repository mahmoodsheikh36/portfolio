const express = require("express");
const path = require("path");
const axios = require('axios');

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/trackify_top_tracks', (req, res) => {
  axios.get('http://trackifyapp.net/api/top_tracks?num_of_tracks_to_return=10').then(apiResponse => {
    res.json(apiResponse.data);
  });
    
});

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, '../client/build')));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
