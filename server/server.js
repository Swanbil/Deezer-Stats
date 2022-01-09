const express = require('express')
const app = express();
const axios = require('axios');
const port = process.env.PORT ||8000

const datasConfig = require('./config.json');

const APP_ID = datasConfig.appId;
const REDIRECT_URI = datasConfig.redirectUri
const PERMS = datasConfig.perms;
const SECRET_KEY = datasConfig.secretKey;
var code = "";
var accessToken = datasConfig.accessToken;
const baseUri = "https://api.deezer.com/";
var history = [];

app.get('/', (req, res) => {
  res.send('Connected to DeezerStats API')
})

app.get('/connect', async(req,res) => {
  if(accessToken == ""){
    const url ="https://connect.deezer.com/oauth/auth.php?app_id="+APP_ID+"&redirect_uri="+REDIRECT_URI+"&perms="+PERMS;
    res.redirect(url);
  }
  else{
    res.redirect('/user/favoriteSongs');
  }
 
})

app.get('/getCode', async(req, res) => {
  code = req.query.code;
  const response = await axios.get('https://connect.deezer.com/oauth/access_token.php?app_id='+APP_ID+'&secret='+SECRET_KEY+'&code='+code);
  accessToken = response.data.split('=')[1].split('&')[0];
  res.redirect('/user/history');
});

app.get('/user/history', async(req,res) => {
  console.log("ACCESS TOKEN =", accessToken);
  try {
    const response = await axios.get(baseUri+"user/me/history?access_token="+accessToken);
    history = response.data.data;
    const numberListeningSongs = getListenedMusic(history);
    res.json(numberListeningSongs);
    
  } catch (err) {
      console.error(err)
  }
});

app.get('/user/favoriteSongs', async(req,res) => {
  try{
    const response = await axios.get(baseUri+"user/me/charts/tracks?access_token="+accessToken);
    var favoriteSongs = response.data.data;
    res.json(favoriteSongs);
  }
  catch(err){
    console.error(err)
  }
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})

function getListenedMusic(history){
  var numberListeningSongs = [];
  history.forEach((song) => {
   if(numberListeningSongs.some((s) => s.title === song.title)){
    numberListeningSongs.forEach((s) => {
      if(s.title == song.title){
        s.count +=1;
      }
    });
   }
   else{
    numberListeningSongs.push({'title':song.title, 'artist':song.artist.name,'count':1});
   }

  });
  return numberListeningSongs;
}