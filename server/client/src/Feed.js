import axios from 'axios';
import React from 'react';
import './style/Feed.css';
import { BsFileEarmarkMusic } from "react-icons/bs";
import { MdAlbum } from "react-icons/md";
import { Spinner } from 'react-bootstrap';

export default class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLog: this.props.isLog,
            albumsReleases: [],
            songsReleases: [],
            isLoading: true
        }
    }

    async componentDidMount() {
        var response = await axios.get('/feed/releases');
        console.log(response)
        var albumsReleases = response.data.albums;
        var songsReleases = response.data.songs;
        this.setState({ albumsReleases: albumsReleases, songsReleases: songsReleases });
        this.setState({ isLoading: false });
    }
    render() {
        return (
            <div>
                <h2 className='mt-3' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    Feed
                </h2>

                <h4><MdAlbum className="mx-2" color={"#70d987"} />Most played albums in France</h4>
                <div id="albums-releases" className="container list-bubble" style={{  }}>
                    {this.state.isLoading
                        ?
                        (<Spinner id="loading-spin" animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>)
                        :
                        this.state.albumsReleases.map((album) => {
                            return (
                                <div className="buble-item col-sm-2" style={{  }} key={album.id}>
                                    <div><img src={album.artworkUrl100} style={{ borderRadius: "10px" }}></img></div>
                                    <div style={{ fontSize: "16px", fontWeight: "bold", color: "#70d987" }}>{album.name}</div>
                                    <div style={{ fontSize: "14px", fontWeight: "bold" }}>{album.artistName}</div>
                                    <div className="bubble-date" style={{ fontSize: "14px", backgroundColor: "white", padding: "6px", borderRadius: "8px" }}>{album.releaseDate}</div>
                                </div>

                            )
                        })}

                </div>

                <h4 style={{ marginTop: "25px" }}><BsFileEarmarkMusic className="mx-2" color={"#70d987"} />Most played songs in France</h4>
                <div id="songs-releases" className="container list-bubble" style={{  }}>
                    {this.state.isLoading
                        ?
                        (<Spinner id="loading-spin" animation="border" role="status" >
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>)
                        :
                        this.state.songsReleases.map((song) => {
                            return (
                                <div className="buble-item col-sm-2" style={{  }} key={song.id}>
                                    <div><img src={song.artworkUrl100} style={{ borderRadius: "10px" }}></img></div>
                                    <div style={{ fontSize: "16px", fontWeight: "bold", color: "#70d987" }}>{song.name}</div>
                                    <div style={{ fontSize: "14px", fontWeight: "bold" }}>{song.artistName}</div>
                                    <div className="bubble-date" style={{ fontSize: "14px", backgroundColor: "white", padding: "6px", borderRadius: "8px" }}>{song.releaseDate}</div>
                                </div>

                            )
                        })}

                </div>
            </div>
        );
    }
}