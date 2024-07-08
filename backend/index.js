/* eslint-disable no-undef */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const port = process.env.PORT;

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cors({
    origin: [
      'https://puneet-netflix-backend.vercel.app',
      'https://localhost:5173',
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
  })
);

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + process.env.TMDB_TOKEN,
  },
};

app.get('/', (req, res) => {
  res.json('hi');
});

app.get('/hero', (req, res) => {
  fetch(
    `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`,
    options
  )
    .then((response) => response.json())
    .then((json) => res.json(json.results[0]))
    .catch((err) => console.error('error:' + err));
});

app.post('/movies/list', (req, res) => {
  const category = req.body.cat;
  fetch(
    `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
    options
  )
    .then((response) => response.json())
    .then((json) => res.json(json.results))
    .catch((err) => console.error('error:' + err));
});

app.post('/movies/video', (req, res) => {
  const id = req.body.id;
  fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
    options
  )
    .then((response) => response.json())
    .then((json) => res.json(json.results))
    .catch((err) => console.error('error:' + err));
});

app.post('/movies/detail', (req, res) => {
  const id = req.body.id;
  fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
    .then((response) => response.json())
    .then((json) => res.json(json))
    .catch((err) => console.error('error:' + err));
});

app.listen(port, () => console.log(`Server is running on port: ${port}`));
