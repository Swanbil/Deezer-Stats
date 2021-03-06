import React from 'react';
import { BiUserVoice } from "react-icons/bi";
import { Spinner } from 'react-bootstrap';
import ArtistCard from "./components/ArtistCards"
import "./style/TracksRanking.css";
import axios from 'axios';

export default class ArtistsRanking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favArtists: [],
            isLoading:true
        };
    }
    async componentDidMount() {
        const response = await axios.get('/user/artists');
        const favArtists = response.data;
        this.setState({ favArtists: favArtists, isLoading: false });
        console.log(this.state.favArtists);
    }
    render() {
        if (!this.props.isLog) {
            return (<div>
                <h2 className='mt-3' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <BiUserVoice className="mx-2" color={"#70d987"} />
                    Artists ranking
                </h2>
                <h5 className='mt-3 text-secondary' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    Please login to see this content
                </h5>
            </div>);
        }
        else {
            return (
                <div>
                    <h2 className='mt-3' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <BiUserVoice className="mx-2" color={"#70d987"} />
                        Artists ranking
                    </h2>
                    <h5 className='mt-3 text-secondary' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>{this.state.errorMessage}</h5>
                    <div className="tracks mt-2">
                    {this.state.isLoading 
                        ?
                            (<Spinner id="loading-spin" animation="border" role="status" >
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>)
                        :
                            (this.state.favArtists.map((value, idx) => {
                                return <ArtistCard artist={value} rank={idx} key={idx} />
    
                            }))
                    }
                    </div>

                </div>
            );
        }

    }
}