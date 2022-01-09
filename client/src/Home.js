import React from 'react';
import "./style/Home.css"
export default class Home extends React.Component {
    
    render() {
        var logo = require('./assets/LogoXL.png');
        return (
            <div>
                <h2 className='mt-3' style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
                    Home
                </h2>
                <div >
                    <img className="overlay" src={logo}/>
                </div>
            </div>
        );
    }
}