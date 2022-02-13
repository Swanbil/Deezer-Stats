import React from 'react';
import './style/App.css';
import Home from './Home';
import TracksRanking from './TracksRanking';
import ArtistsRanking from './ArtistsRanking';
import AlbumsRanking from './AlbumsRanking';
import Feed from './Feed';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { decodeToken  } from "react-jwt";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLog: false
    };
  }

  async componentDidMount(){
    const currentToken = localStorage.getItem('token');
    if(currentToken !== null){
        const myDecodedToken = decodeToken(currentToken);
        this.setState({isLog:myDecodedToken.log}, () => {
            console.log("IF ALREADY REGISTER",this.state.isLog);
        });
    }
    else{
        const res = await axios.get('/getToken');
        if(res.data.token != undefined){
            console.log("NEW TOKEN FROM SERVER",res.data.token)
            var token = res.data.token;
            localStorage.setItem('token',token);
            const myDecodedToken = decodeToken(token);
            this.setState({isLog:myDecodedToken.log});
        }
    }
}

handleCallback = (childData) =>{
  this.setState({isLog: childData})
}
  render() {
    return (
      <Router>
        <div>
          <NavBar isLog={this.state.isLog} logCallback = {this.handleCallback}/>
          <Routes >
            <Route path="/"  element={<Home isLog={this.state.isLog} logCallback={this.handleCallback}/>} />
            <Route path="/stats/tracks" element={<TracksRanking isLog={this.state.isLog}/>} />
            <Route path="/stats/artists" element={<ArtistsRanking isLog={this.state.isLog}/>}  />
            <Route path="/stats/albums" element={<AlbumsRanking isLog={this.state.isLog}/>}  />
            <Route path="/feed" element={<Feed isLog={this.state.isLog} />}  />
          </Routes>
          <Footer />
        </div>
      </Router>
    );
  }

}

