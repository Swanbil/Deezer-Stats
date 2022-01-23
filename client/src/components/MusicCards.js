import React from 'react';
import "../style/MusicCards.css";
import { FaMedal, FaTrophy } from "react-icons/fa";
import { MdAlbum } from "react-icons/md";
import ReactAudioPlayer from 'react-audio-player';
export default class MusicCards extends React.Component {
    render() {
        var icone = "";
        if (this.props.rank === 0) {
            icone = <FaTrophy style={{ color: "#fde400" }} />
        }
        else if (this.props.rank === 1) {
            icone = <FaMedal style={{ color: "#c4c4c4" }} />
        }
        return (
            <div className='row '>
                <div className="card mb-3" style={{ maxWidth: "640px" }} id="card">
                    <div className="row no-gutters">
                        <div className="col-md-4 text-align-center bg-light">
                            <img src={this.props.track.album.cover_xl} className="card-img" id="img" />
                        </div>
                        <div className="col-md-8 bg-light" id="cardBody">
                            <div className="card-body">
                                <h5 className="card-title">{this.props.track.title}<span className='mx-3'>{icone}</span></h5>
                                <h5 className="card-subtitle">{this.props.track.artist.name}</h5>
                                <p className="card-text mt-2"><MdAlbum className='mx-1' />{this.props.track.album.title}</p>
                                <audio
                                    controls
                                    src={this.props.track.preview}>
                                    Your browser does not support the
                                    <code>audio</code> element.
                                </audio>
                            </div>

                        </div>
                        <div className='card-footer'>{this.props.rank + 1}</div>
                    </div>
                </div>

            </div>


        );
    }
}