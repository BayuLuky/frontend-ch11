import React, { useEffect, useState } from "react"
import Head from "next/head"
import Link from "next/link"
import Script from "next/script"
import APIRequest from '../../components/library/request/apiRequest'

const ListGame = (props) => {

  const API = `${process.env.NEXT_PUBLIC_APIURL}game`
  const [listgame, setListgame] = useState([])

  const getListgame = () => {
    APIRequest('GET', API)
      .then(response => {
        const listgame = response.data
        setListgame(listgame)
      })
      .catch(err => {
        console.log('err', err)
      })
  }

  useEffect(() => {
    return getListgame()
  }, [])

  return (
    <React.Fragment>
      <div>
        {/* Start List Game*/}
        <div
          className="jumbotron jumbotron-fluid bg-image headergame"
          id="header"
        >
          <div className="container">
            <h1>List Game</h1>
            <div className="row">
              {listgame.map((listgame, idx) => (
                <div key={idx} className="col-sm-4 mt-4">
                  <Link href={"/detail-game"} style={{ cursor: "pointer" }}>
                    <div className="card bg-light" style={{ width: "18rem" }}>
                      {listgame.play_count != null ?
                        (
                          <div className="card-header bg-success">Played</div>

                        )
                        :
                        (
                          <div className="card-header bg-danger">Lets Play</div>
                        )
                      }
                      <img
                        src="assets/rockpaperstrategy-1600.jpg"
                        alt="image slide"
                      />
                      <div className="card-body">
                        <h5 className="card-title text-muted">{listgame.name}</h5>
                        <p className="card-text text-muted">
                          {listgame.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
              {/* <div className="col-sm-4 mt-4">
                <div className="card bg-light" style={{ width: "18rem" }}>
                  <div className="card-header bg-danger">Lets Play</div>
                  <img
                    src="assets/rockpaperstrategy-1600.jpg"
                    alt="image slide"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-muted">Card title</h5>
                    <p className="card-text text-muted">
                      Some quick example text to build on the card title and
                      make up the bulk of the cards content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 mt-4">
                <div className="card bg-light" style={{ width: "18rem" }}>
                  <div className="card-header bg-danger">Lets Play</div>
                  <img
                    src="assets/rockpaperstrategy-1600.jpg"
                    alt="image slide"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-muted">Card title</h5>
                    <p className="card-text text-muted">
                      Some quick example text to build on the card title and
                      make up the bulk of the cards content.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        {/* End List Game */}
      </div>
    </React.Fragment>
  )
}

export default ListGame
