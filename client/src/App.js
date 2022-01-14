import logo from './logo.svg';
import './style/App.css';
import Login from './Login';
import Home from './Home';
import TracksRanking from './TracksRanking';
import Feed from './Feed';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/stats/tracks" element={<TracksRanking />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
