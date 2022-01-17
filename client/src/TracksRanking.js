import React from 'react';
import { BsFileEarmarkMusic } from "react-icons/bs";
import MusicCard from "./components/MusicCards"
import "./style/TracksRanking.css";
import axios from 'axios';
export default class Stats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favSongs: []
        };
    }
    async componentDidMount() {
        const response = await axios.get('/user/favoriteSongs');
        const favSongs = response.data;
        this.setState({ favSongs: favSongs });
        console.log(this.state.favSongs)
    }
    render() {
        
        return (
            <div>
                <h2 className='mt-3' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <BsFileEarmarkMusic className="mx-2" color={"#70d987"} />
                    Tracks ranking
                </h2>

                <div className="tracks mt-2">
                        {this.state.favSongs.map((value, idx) => {
                            return <MusicCard track={value} rank={idx} key={idx} />

                        })}
                </div>

            </div>
        );
    }
}