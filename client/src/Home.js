import React from 'react';
import "./style/Home.css"
import backImage from "./assets/LogoXL.png"
export default class Home extends React.Component {
    
    render() {
        
        return (
            <div className='overlay'>
                <h2 className='text-dark font-weight-bold pt-3' style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
                    Home
                </h2>
            </div>
        );
    }
}