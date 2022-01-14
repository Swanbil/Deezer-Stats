import React from 'react';
import "../style/MusicCards.css";

export default class MusicCards extends React.Component {
    render() {

        return (
            <div>
                <div class="card flex-row flex-wrap mt-3" style={{width: "800px"}}>
                    <div class="card-header border-0">
                        <img src="https://cdns-images.dzcdn.net/images/cover/ec26ae31bde4eebd58f1c8cd0f846fa4/500x500.jpg" width="200px" alt="" />
                    </div>
                    <div class="card-body text-center px-2">
                        <h4 class="card-title text-light">Title</h4>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="card-text">Description</p>
                        
                    </div>
                    <div class="w-100"></div>
                    <div class="card-footer w-100 text-muted">
                        FOOTER
                    </div>
                </div>
            </div>
        );
    }
}