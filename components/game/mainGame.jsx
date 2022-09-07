import React, { useEffect, useState } from "react"
import Head from "next/head"
import Link from "next/link"
import Script from "next/script"

const Game = (props) => {
  return (
    <React.Fragment>
      <Head>
        <link rel="stylesheet" href="css/style.css" />
        <title>Rock Paper Scissor</title>
      </Head>
      <div
        className="jumbotron jumbotron-fluid bg-image headergame"
        id="headergame"
      >
        <div className="row mt-5">
          <div className="game-section">
            <div className="row">
              <div className="left-section">
                <h3 className="card-role">Player 1</h3>
                <div className="row contentImage">
                  <div className="col">
                    <div className="card card-player p-4">
                      <img
                        src="./assets/batu.png"
                        id="rock"
                        name="rock"
                        alt="batu"
                        className="player"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-player p-4">
                      <img
                        src="./assets/kertas.png"
                        id="paper"
                        name="paper"
                        alt="paper"
                        className="player"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-player p-4">
                      <img
                        src="./assets/gunting.png"
                        id="scissors"
                        name="scissors"
                        alt="scissors"
                        className="player"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="center-section">
                <div className="row">
                  <div className="col title-status">
                    <h1>VS</h1>
                  </div>
                  <div className="col center-side-status hide-status">
                    <div className="card-status">
                      <h2 />
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-section">
                <h3 className="card-role">Com</h3>
                <div className="row">
                  <div className="col">
                    <div className="card card-comp p-4">
                      <img src="./assets/batu.png" alt="rock" />
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-comp p-4">
                      <img src="./assets/kertas.png" alt="paper" />
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-comp p-4">
                      <img src="./assets/gunting.png" alt="scissors" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="reset-section">
                  <img
                    className="bg-warning p-1"
                    id="btn_reset"
                    name="btn_reset"
                    src="./assets/refresh.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Script src="js/rps.js"></Script>
    </React.Fragment>
  )
}

export default Game
