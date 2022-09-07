import React from "react"
import Link from "next/link"

const Footer = (props) => {
  return (
    <footer>
      <div id="footer">
        <div className="navigation text-center" id="navigation">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 my-2">
                <a href="#header">
                  <span>Main</span>
                </a>
                <a href="#thegame">
                  <span>Games</span>
                </a>
                <a href="#features">
                  <span>Features</span>
                </a>
                <a href="#topscores">
                  <span>Top Score</span>
                </a>
              </div>
              <div className="col-lg-4 my-2 socialmedia">
                <a href="https://facebook.com/">
                  <span>
                    <img src="assets/facebook.svg" alt="facebook" />
                  </span>
                </a>
                <a href="https://twitter.com/">
                  <span style={{ color: "white" }}>
                    <img src="assets/twitter.svg" alt="twitter" />
                  </span>
                </a>
                <a href="https://youtube.com/">
                  <span>
                    <img src="assets/Vector.svg" alt="youtube" />
                  </span>
                </a>
                <a href="https://twitch.tv/">
                  <span>
                    <img src="assets/twitch.svg" alt="twitch" />
                  </span>
                </a>
              </div>
            </div>
            <hr />
            <div className="row content-justify-end footer">
              <div className="col-lg-4">
                <div className="d-inline">
                  <p>© 2018 Your Games, inc. All Rights Reserved</p>
                </div>
              </div>
              <div className="col-lg-6 offset-lg-2 mb-2">
                <div className="d-inline">
                  <a href="#">
                    <span>Privacy Policy </span>
                  </a>
                  |
                  <a href="#">
                    <span>Terms of Services </span>
                  </a>
                  |
                  <a href="#">
                    <span>Code of Conduct</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
