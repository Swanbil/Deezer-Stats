import React from 'react';
import "./style/Home.css"
import logoDark from "./assets/logo_cover.png"
import { FaNewspaper } from 'react-icons/fa';
import { IoStatsChart } from 'react-icons/io5';
import { Link } from 'react-router-dom';


export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLog:this.props.isLog
        }
    }
    render() {
        var welcomeTitle = ""
        if(this.props.username != ""){
            welcomeTitle = (<h4 style={{ display: "flex", justifyContent: "center", alignItems: "center", color:"#7b7d7c" }}>Welcome back {this.props.username}</h4>);
        }
        return (
            <div className='overlay'>
                <h2 className='text-dark font-weight-bold pt-3' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img className="logoDark" src={logoDark}></img>
                </h2>
                {welcomeTitle}
                <section className="services">
                    <div className="col-md-2 mx-5 service">
                        <IoStatsChart color={"#70d987"} size={56} />
                        <h4 className="my-2 text-dark">Statistiques</h4>
                        <div className="subtext text-secondary text-center">
                            Consult your deezer's stats, who's your favorites artists of the moment?
                        </div>
                        <Link to="/stats/tracks"><button className='btn my-1 text-light' style={{ backgroundColor: "#70d987" }}>Discover</button></Link>
                    </div>
                    <div className="col-md-2 mx-5 service">
                        <FaNewspaper color={"#70d987"} size={56} />
                        <h4 className="my-2 text-dark">Feed</h4>
                        <div className="subtext text-secondary text-center">
                            All the music world actualities, discover new musics genres and artists
                        </div>
                        <Link to="/feed"><button className='btn my-1 text-light' style={{ backgroundColor: "#70d987" }}>Discover</button></Link>
                    </div>
                </section>
            </div>
        );
    }
}