import React from 'react';
import "../style/MusicCards.css";
import { FaMedal, FaTrophy } from "react-icons/fa";
import "../style/MusicCards.css";

export default class MusicCards extends React.Component {
    render() {
        var icone = "";
        if (this.props.rank === 0) {
            icone = <FaTrophy style={{ color: "#fde400" }} />
        }
        else if (this.props.rank === 1) {
            icone = <FaMedal style={{ color: "#c4c4c4" }} />
        }
        //console.log(this.props.topTracks)
        return (
            <div className='row '>
                <div className="card mb-3 rounded" style={{maxWidth:"540px"}} id="card">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img className="card-img-top" src={this.props.artist.picture_big} alt="Card image cap" style={{ borderRadius: "50%" }} id="img"/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{this.props.artist.name}<span className='mx-3'>{icone}</span></h5>
                                <p className="card-text">
                                    <small className="text-muted">
                                    </small></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        );
    }
}



