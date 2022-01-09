import React from 'react';
import axios from 'axios';
export default class Login extends React.Component {
    async test(){
        const response = await axios.get('/user/history');
        const history = response.data;
        console.log(history)
    }
    render() {
        
        return (
            <div>
                <h2  className='mt-3' style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
                    Login
                </h2>
                <button className="btn btn-primary" onClick={this.test.bind(this)}>
                    GET
                </button>
            </div>
        );
    }
}