import React from 'react';
import {MdAlbum} from "react-icons/md";
import AlbumCards from "./components/AlbumCards"
import "./style/TracksRanking.css";
import axios from 'axios';

export default class AlbumsRanking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favAlbums: [],

        };
    }
    async componentDidMount() {
        var topTracks = [];
        const response = await axios.get('/user/favoriteAlbums');
        const favAlbums = response.data;
        this.setState({ favAlbums: favAlbums });
        console.log(this.state.favAlbums);
    }
    render() {
        return (
            <div>
                <h2 className='mt-3' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <MdAlbum className="mx-2" color={"#70d987"} />
                    Albums ranking
                </h2>

                <div className="tracks mt-2">
                        {this.state.favAlbums.map((value, idx) => {
                            return <AlbumCards album={value} rank={idx} key={idx} />

                        })}
                </div>

            </div>
        );
    }
}