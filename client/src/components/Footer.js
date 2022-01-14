import React from 'react';
import "../style/Footer.css"

export default class Footer extends React.Component {
  render() {

    return (
      <div>
        <footer class="site-footer">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-6">
                <h6>About</h6>
                <p class="text-justify">DeezerStats is a web application to consult his Deezer's account statistics. You
                  can see which is your favorite artist or song of the moment. You can also discover your account's datas as your listening time or other.
                  Many features will go out. Stay plug 🔌 !</p>
              </div>

              <div class="col-xs-6 col-md-3">
                <h6>Services</h6>
                <ul class="footer-links">
                  <li>Actualities</li>
                  <li>Statistics</li>
                  <li>Account datas</li>
                </ul>
              </div>

              <div class="col-xs-6 col-md-3">
                <h6>Developper</h6>
                <ul class="footer-links">
                  <li><a href="https://www.deezer.com/fr/">Deezer</a></li>
                  <li><a href="https://github.com/Swanbil">Github account</a></li>
                </ul>
              </div>
            </div>

          </div>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-8 col-sm-6 col-xs-12">
                <p class="copyright-text">Copyright &copy; 2022 All Rights Reserved to <span className="text-warning">Swaninho</span>.
                </p>
              </div>

            </div>
          </div>
        </footer>
      </div>
    );
  }
}