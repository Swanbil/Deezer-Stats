const express = require('express');
const path = require("path");
const app = express();
const axios = require('axios');
var cors = require('cors');
const session = require('express-session');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

app.use(express.static(path.resolve(__dirname, "./client/build")));
app.use(session({
  secret: "sshshhshs",
  resave: true,
  saveUninitialized: true
}));
app.use(cors())
const port = process.env.PORT || 8000;


// const APP_ID = datasConfig.appId;
// const REDIRECT_URI = datasConfig.redirectUri
// const PERMS = datasConfig.perms;
// const SECRET_KEY = datasConfig.secretKey;
const APP_ID = process.env.APP_ID;
const REDIRECT_URI = process.env.REDIRECT_URI
const PERMS = process.env.PERMS;
const SECRET_KEY = process.env.SECRET_KEY;
const BASE_URL = process.env.BASE_URL;
var code = "";
const baseUri = "https://api.deezer.com/";
var history = [];


app.get('/', (req, res) => {
  res.send('Connected to DeezerStats API')
})

app.get('/login', async (req, res) => {
  const url = "https://connect.deezer.com/oauth/auth.php?app_id=" + APP_ID + "&redirect_uri=" + REDIRECT_URI + "&perms=" + PERMS;
  res.send(url);
})

app.get('/logout', async (req, res) => {
  req.session.destroy();
  res.send(BASE_URL);
})

app.get('/connected', (req,res) => {
  if(req.session.tokenSession){
    res.json({ 
      token: req.session.tokenSession,
      username : req.session.username
    })
  }
  else{
    res.json({
      message: 'not connected'
    })
  }
  return
})
app.get('/login/code', async (req, res) => {
  code = req.query.code;
  const response = await axios.get('https://connect.deezer.com/oauth/access_token.php?app_id=' + APP_ID + '&secret=' + SECRET_KEY + '&code=' + code);
  req.session.accessToken = response.data.split('=')[1].split('&')[0];
  accessToken = req.session.accessToken;
  //console.log("Access token = ",accessToken);
  var userInfos = await axios.get(baseUri + "user/me?access_token=" + req.session.accessToken);
  userInfos = userInfos.data;
  req.session.tokenSession = jwt.sign({ log: true},'RANDOM_TOKEN_SECRET',{ expiresIn: '24h' });
  req.session.username = userInfos.name;
  res.redirect(BASE_URL);
});

app.get('/user/history', async (req, res) => {
  try {
    const response = await axios.get(baseUri + "user/me/history?access_token=" + req.session.accessToken);
    history = response.data.data;
    const numberListeningSongs = getListenedMusic(history);
    res.json(numberListeningSongs);

  } catch (err) {
    console.error(err)
  }
});

app.get('/user/tracks', async (req, res) => {
  try {
    const response = await axios.get(baseUri + "user/me/charts/tracks?access_token=" + req.session.accessToken);
    var favoriteSongs = response.data.data;
    res.json(favoriteSongs);
  }
  catch (err) {
    console.error(err)
  }
})

app.get('/user/artists', async (req, res) => {
  try {
    const response = await axios.get(baseUri + "user/me/charts/artists?access_token=" + req.session.accessToken);
    var favoriteArtists = response.data.data;
    res.json(favoriteArtists);
  }
  catch (err) {
    console.error(err)
  }
})
app.get('/user/albums', async (req, res) => {
  try {
    const response = await axios.get(baseUri + "user/me/charts/albums?access_token=" + req.session.accessToken);
    var favoriteAlbums = response.data.data;
    res.json(favoriteAlbums);
  }
  catch (err) {
    console.error(err)
  }
})

app.get('/feed/releases', async (req, res) => {
  var response = await axios.get('https://rss.applemarketingtools.com/api/v2/fr/music/most-played/10/albums.json');
  const albumsReleases = response.data.feed.results;
  response = await axios.get('https://rss.applemarketingtools.com/api/v2/fr/music/most-played/10/songs.json');
  const songsReleases = response.data.feed.results;
  res.json({albums : albumsReleases, songs : songsReleases});
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})

function getListenedMusic(history) {
  var numberListeningSongs = [];
  history.forEach((song) => {
    if (numberListeningSongs.some((s) => s.title === song.title)) {
      numberListeningSongs.forEach((s) => {
        if (s.title == song.title) {
          s.count += 1;
        }
      });
    }
    else {
      numberListeningSongs.push({ 'title': song.title, 'artist': song.artist.name, 'count': 1 });
    }

  });
  return numberListeningSongs;
}