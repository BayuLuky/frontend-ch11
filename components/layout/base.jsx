import React from "react"
import Head from "next/head"
import NavBar from "./navbar"
import Footer from "./footer"
import Script from "next/script"
import Swal from "sweetalert2"
import Router from "next/router"
import { connect } from "react-redux";

import { setUser, setToken, setLogging, reset } from "../redux/reduxActions";

const mapStateToProps = (state, ownProps) => ({
  stateObject: state
})

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => {
    dispatch(setUser(user))
  },
  setToken: (accessToken) => {
    dispatch(setToken(accessToken))
  },
  setLogging: (loggedIn) => {
    dispatch(setLogging(loggedIn))
  },
  reset: () => {
    dispatch(reset())
  }
})

class BaseLayout extends React.Component {
  triggerLogout = () => {
    Swal.fire({
      text: "Anda akan keluar dari aplikasi?",
      icon: "warning",
      buttonsStyling: false,
      showCancelButton: true,
      confirmButtonText: "Keluar!",
      cancelButtonText: 'Tidak, batalkan',
      customClass: {
        confirmButton: "btn btn-danger mr-3",
        cancelButton: 'btn btn-secondary'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        window.localStorage.removeItem('game_identifier')
        this.props.reset()
        Router.push('/')
      }
    })
  }

  render() {
    const { children } = this.props

    return (
      <React.Fragment>
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          {/* Bootstrap CSS */}
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
            integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn"
            crossOrigin="anonymous"
          />

          {/* CSS */}
          <link rel="stylesheet" href="css/main.css" />
          {/* <link rel="stylesheet" href="css/style.css" /> */}

          {/* Font */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Open+Sans&display=swap"
          />

          <title>Binar Challenge</title>
        </Head>

        <NavBar triggerLogout={this.triggerLogout} />

        {/* <Example /> */}
        <main className="my-10 pb-8 ">{children}</main>

        <Footer />
        <Script
          src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
          crossOrigin="anonymous"
        ></Script>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF"
          crossOrigin="anonymous"
        ></Script>
      </React.Fragment>
    )
  }
}

BaseLayout = connect(mapStateToProps, mapDispatchToProps)(BaseLayout)
export default BaseLayout
