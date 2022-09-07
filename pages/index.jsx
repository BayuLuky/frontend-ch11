import React, { useState, useEffect } from 'react';
import Head from "next/head"
import Link from "next/link"
import styles from "../styles/Home.module.css"
import APIRequest from '../components/library/request/apiRequest'

export default function Home() {

  const API = `${process.env.NEXT_PUBLIC_APIURL}users/score`
  const [topscore, setTopscore] = useState([])

  const getTopscore = () => {
    APIRequest('GET', API)
      .then(response => {
        const topscore = response.scores
        setTopscore(topscore)
      })
      .catch(err => {
        console.log('err', err)
      })
  }

  useEffect(() => {
    return getTopscore()
  }, [])

  return (
    <>
      <Head>
        <title>Binar Challenge</title>
      </Head>

      {/* Start Header*/}
      <div
        className="jumbotron jumbotron-fluid bg-image headergame"
        id="header"
      >
        <div className="container">
          <h1>Play traditional game</h1>
          <h3>Experience new traditional game play</h3>
          <Link href={"/list-game"}>
            <a className="btn btn-warning">Play now</a>
          </Link>
        </div>
        <div className="container-fluid nextgamecontent">
          <h3>The story</h3>
          <a href="#thegame">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40px"
                height="40px"
                fill="white"
                className="bi bi-caret-down"
                viewBox="0 0 16 16"
              >
                <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
              </svg>
            </span>
          </a>
        </div>
      </div>
      {/* End Header */}

      {/* Start The Game Content */}
      <div
        className="jumbotron jumbotron-fluid bg-image gamecontent"
        id="thegame"
      >
        <div className="container h-75 d-flex align-items-center">
          <div className="row mx-auto">
            <div className="col-lg-4">
              <h3>Whats so special?</h3>
              <h1>The games</h1>
              <Link href={"/list-game"}>
                <a className="btn btn-warning font-weight-bold text-uppercase">
                  More Games
                </a>
              </Link>
            </div>
            <div className="col-lg-8">
              <div
                id="carousel-game"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carousel-game"
                    data-slide-to={0}
                    className="active"
                  />
                  <li data-target="#carousel-game" data-slide-to={1} />
                  <li data-target="#carousel-game" data-slide-to={2} />
                  <li data-target="#carousel-game" data-slide-to={3} />
                  <li data-target="#carousel-game" data-slide-to={4} />
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="d-block w-75"
                      src="assets/rockpaperstrategy-1600.jpg"
                      alt="First slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-75"
                      src="assets/rockpaperstrategy-1600.jpg"
                      alt="Second slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-75"
                      src="assets/rockpaperstrategy-1600.jpg"
                      alt="Third slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-75"
                      src="assets/rockpaperstrategy-1600.jpg"
                      alt="Fourth slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-75"
                      src="assets/rockpaperstrategy-1600.jpg"
                      alt="Fifth slide"
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-target="#carousel-game"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-target="#carousel-game"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End The Game Content */}

      {/* Start Features Content */}
      <div
        className="jumbotron jumbotron-fluid bg-image featurescontent"
        id="features"
      >
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-md-5">
              <h3>Whats so special?</h3>
              <h1>Features</h1>
              <div className="step completed">
                <div className="v-stepper">
                  <div className="circle" />
                  <div className="line" />
                </div>
                <div className="content">
                  <h2>Traditional games</h2>
                  <p>
                    If you miss your childhood, we provide many traditional
                    games here
                  </p>
                </div>
              </div>
              <div className="step active">
                <div className="v-stepper">
                  <div className="circle" />
                </div>
                <div className="content">
                  <h2>Game suit</h2>
                </div>
              </div>
              <div className="step active">
                <div className="v-stepper">
                  <div className="circle" />
                </div>
                <div className="content">
                  <h2>TBD</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Features Content */}

      {/* Start System Requirements Content */}
      <div
        className="jumbotron jumbotron-fluid bg-image sysreqcontent"
        id="sysreq"
      >
        <div className="container">
          <div>
            <h5>Can My Computer Run This Game?</h5>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <h1>System Requirements</h1>
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <td style={{ width: "50%" }}>
                      <h2>OS:</h2>
                      <p>
                        Windows 7 64-bit only <br />
                        (No OSX support at this time)
                      </p>
                    </td>
                    <td>
                      <h2>Processor:</h2>
                      <p>Intel Core 2 Duo @2.4GHz or AMD Athlon X2 @ 2.8GHz</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2>Memory:</h2>
                      <p>4 GB RAM</p>
                    </td>
                    <td>
                      <h2>Storage:</h2>
                      <p>8 GB available space</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <h2>Graphics:</h2>
                      <p>
                        NVIDIA GeForce GTX 660 2GB or
                        <br />
                        AMD Radeon HD 7850 2GB DirectX11 (Shader Model 5)
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* End System Requirements Content */}

      {/* Start Top Scores Content */}
      <div
        className="jumbotron jumbotron-fluid bg-image topscorescontent"
        id="topscores"
      >
        <div className="container">
          <div className="topscoresleft">
            <h1>Top Scores</h1>
            <h2>This top score from various games provided on this platform</h2>
            <a href="#" className="btn btn-warning">
              see more
            </a>
          </div>
          <div className="row">
            {topscore.slice(0, 3).map((topscore, idx) => (
              <div key={idx} className="col-lg-4 col-md-6 col-sm-8 offset-lg-8 offset-md-3 offset-sm-2 twittercards">
                <div className="card text-white bg-dark mb-4">
                  <div className="card-header">
                    <img
                      src="assets/evan-lahti.jpg"
                      className="img-fluid float-left profilepic"
                      alt="Evan Lahti"
                    />
                    <h3>{topscore.fullname}</h3>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      score : {topscore.total_score}
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* End Top Scores Content */}

      {/* Start Newsletter Content */}
      <div
        className="jumbotron jumbotron-fluid bg-image d-flex align-items-center newslettercontent"
        id="newsletter"
      >
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-6 offset-md-6 text-left">
              <h3>Want to stay in touch?</h3>
              <h1>Newsletter Subscribe</h1>
              <p>
                In order to start receiving our news, all you have to do is
                enter your email address. Everything else will be taken care of
                by us. We will send you emails containing information about
                game. We don’t spam.
              </p>
            </div>
            <div className="col-md-6 offset-md-6">
              <form className="form-row">
                <div className="form-group col-md-7">
                  <label className="sr-only" htmlFor="email">
                    email
                  </label>
                  <input
                    type="text"
                    className="form-control mb-2 mr-sm-2 pt-3 bg-dark"
                    id="email"
                    placeholder="youremail@binar.co.id"
                  />
                  <p>Your email address</p>
                </div>
                <div className="col-md-5 text-left">
                  <button className="btn btn-warning mb-3 w-100">
                    Subscribe now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* End Newsletter Content */}
    </>
  )
}
