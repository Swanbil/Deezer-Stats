import React from 'react';
import { BsFileEarmarkMusic } from "react-icons/bs";
import { Spinner } from 'react-bootstrap';
import MusicCard from "./components/MusicCards"
import "./style/TracksRanking.css";
import axios from 'axios';
export default class TracksRanking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favSongs: [],
            isLoading:true
        };
    }
    async componentDidMount() {
        const response = await axios.get('/user/tracks');
        const favSongs = response.data;
        this.setState({ favSongs: favSongs });
        this.setState({ isLoading: false });
        console.log(this.state.favSongs)
    }
    render() {
        if (!this.props.isLog) {
            return (
                <div>
                    <h2 className='mt-3' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <BsFileEarmarkMusic className="mx-2" color={"#70d987"} />
                        Tracks ranking
                    </h2>
                    <h5 className='mt-3 text-secondary' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        Please login to see this content
                    </h5>
                </div>
            );
        }
        else {
            return (
                <div>
                    <h2 className='mt-3' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <BsFileEarmarkMusic className="mx-2" color={"#70d987"} />
                        Tracks ranking
                    </h2>
                   
                    <div className="tracks mt-2">                   
                        {this.state.isLoading 
                        ?
                            (<Spinner id="loading-spin" animation="border" role="status" >
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>)
                        :
                            (this.state.favSongs.map((value, idx) => {
                                return <MusicCard track={value} rank={idx} key={idx} />

                            }))
                        }
                    </div>
                </div>
            );
        }
    }
}