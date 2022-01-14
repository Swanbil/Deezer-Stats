import React from 'react';
import { BsFileEarmarkMusic } from "react-icons/bs";
import MusicCard from "./components/MusicCards"
import "./style/TracksRanking.css"
export default class Stats extends React.Component {
    render() {

        return (
            <div>
                <h2 className='mt-3' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <BsFileEarmarkMusic className="mx-2" color={"#70d987"} />
                    Tracks ranking
                </h2>

                <div className="tracks">
                    <MusicCard />
                    <MusicCard />
                    <MusicCard />
                    <MusicCard />
                </div>

            </div>
        );
    }
}