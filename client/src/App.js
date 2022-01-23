import React from 'react';
import './style/App.css';
import Login from './Login';
import Home from './Home';
import TracksRanking from './TracksRanking';
import ArtistsRanking from './ArtistsRanking';
import AlbumsRanking from './AlbumsRanking';
import Feed from './Feed';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/stats/tracks" element={<TracksRanking />} />
            <Route path="/stats/artists" element={<ArtistsRanking />}  />
            <Route path="/stats/albums" element={<AlbumsRanking />}  />
            <Route path="/feed" element={<Feed />}  />
          </Routes>
          <Footer />
        </div>
      </Router>
    );
  }

}

