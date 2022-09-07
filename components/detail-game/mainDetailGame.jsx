import React, { useEffect, useState } from "react"
import { connect } from "react-redux";
import Head from "next/head"
import Link from "next/link"
import Script from "next/script"
import APIRequest from '../../components/library/request/apiRequest'

const mapStateToProps = (state, ownProps) => ({
  stateObject: state
})

const DetailGame = (props) => {

  const dataUser = props.stateObject.user !== 'undefined' ? props.stateObject.user : {}
  const API = `${process.env.NEXT_PUBLIC_APIURL}game/1`
  const [game, setGame] = useState([])

  const getGame = () => {
    APIRequest('GET', API)
      .then(response => {
        const game = response.data
        setGame(game)
      })
      .catch(err => {
        console.log('err', err)
      })
  }

  useEffect(() => {
    return getGame()
  }, [])

  return (
    <React.Fragment>
      <div>
        {/* Start Detail Game*/}
        <div
          className="jumbotron jumbotron-fluid bg-image headergame"
          id="header"
        >
          <div className="container mt-5">
            <h2>Detail Games</h2>
            <div className="row">
              <div className="col-sm-6 mt-4">
                <div className="card-header pt-4 bg-light"></div>
                <div className="card bg-light img-fluid w-100">
                  <img
                    src="../assets/rockpaperstrategy-1600.jpg"
                    alt="image slide"
                  />
                  <div className="card-body bg-light"></div>
                </div>
              </div>
              <div className="col-sm-6 mt-4">
                <div className="card bg-light p-4" style={{ width: "100%" }}>
                  <div className="card-header bg-secondary">
                    <h5 className="card-title pt-2">{game.name}</h5>
                  </div>
                  <div className="card-body">
                    <p className="card-text text-muted">Description</p>
                    <p className="card-text text-muted">
                      {game.description}
                    </p>
                  </div>
                  {dataUser ?
                    (
                      <Link href={`${process.env.NEXT_PUBLIC_BASEURL}game`}>
                        <a className="btn btn-warning font-weight-bold text-uppercase w-100">
                          Play Game
                        </a>
                      </Link>
                    )
                    :
                    (
                      <Link href={`${process.env.NEXT_PUBLIC_BASEURL}login`}>
                        <a className="btn btn-warning font-weight-bold text-uppercase w-100">
                          Play Game
                        </a>
                      </Link>
                    )
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Detail Game */}
      </div>
    </React.Fragment>
  )
}

export default connect(mapStateToProps)(DetailGame);
