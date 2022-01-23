import React from 'react';
import { BiUserVoice } from "react-icons/bi";
import ArtistCard from "./components/ArtistCards"
import "./style/TracksRanking.css";
import axios from 'axios';

export default class ArtistsRanking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favArtists: [],
            topTracksArtist: []

        };
    }
    async componentDidMount() {
        var topTracks = [];
        const response = await axios.get('/user/favoriteArtists');
        const favArtists = response.data;
        this.setState({ favArtists: favArtists });
        console.log(this.state.favArtists);
    }
    render() {
        return (
            <div>
                <h2 className='mt-3' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <BiUserVoice className="mx-2" color={"#70d987"} />
                    Artists ranking
                </h2>

                <div className="tracks mt-2">
                        {this.state.favArtists.map((value, idx) => {
                            return <ArtistCard artist={value} rank={idx} key={idx} />

                        })}
                </div>

            </div>
        );
    }
}