import React from 'react';
import { FaMedal, FaTrophy } from "react-icons/fa";
import "../style/MusicCards.css";

export default class AlbumCards extends React.Component {
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
                <div className="card mb-3" style={{maxWidth:"540px"}} id="card">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img className="card-img-top" src={this.props.album.cover_big} alt="Card image cap" id="img"/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{this.props.album.title}<span className='mx-3'>{icone}</span></h5>
                                <h5 className="card-subtitle">{this.props.album.artist.name}</h5>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        );
    }
}