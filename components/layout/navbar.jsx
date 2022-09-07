import React, { useEffect, useState } from "react"
import Link from "next/link"
import { connect } from "react-redux";
import { useRouter } from 'next/router';

const mapStateToProps = (state, ownProps) => ({
  stateObject: state
})

const NavBar = (props) => {
  const router = useRouter()
  const baseURL = `${process.env.NEXT_PUBLIC_BASEURL}`
  const dataUser = props.stateObject.user !== 'undefined' ? props.stateObject.user : {}

  // const logoutHandler = () => {
  //   window.localStorage.removeItem('game_identifier')
  //   props.reset()
  //   router.push('/')
  // };

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light w-100 navbargame">
        <div className="container mr-auto">
          <Link href={"/"}>
            <a className="navbar-brand mr-5 logo" style={{ cursor: "pointer" }}>
              Logo
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto navbar-center">
              <Link href={"/"}>
                <li className="nav-item" style={{ cursor: "pointer" }}>
                  <a className="nav-link">Home</a>
                </li>
              </Link>
              <Link href={`${baseURL}#thegame`}>
                <li className="nav-item">
                  <a className="nav-link">Games</a>
                </li>
              </Link>
              <Link href={`${baseURL}#features`}>
                <li className="nav-item">
                  <a className="nav-link">Features</a>
                </li>
              </Link>
              <Link href={`${baseURL}#sysreq`}>
                <li className="nav-item">
                  <a className="nav-link">System</a>
                </li>
              </Link>
              <Link href={`${baseURL}#topscores`}>
                <li className="nav-item">
                  <a className="nav-link">Top Score</a>
                </li>
              </Link>
              <Link href={`${baseURL}#newsletter`}>
                <li className="nav-item">
                  <a className="nav-link">Newsletter</a>
                </li>
              </Link>
            </ul>
            {dataUser ?
              (
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {dataUser.username}
                    </a>
                    <div className="dropdown-menu bg-secondary" aria-labelledby="navbarDropdownMenuLink">
                      <Link href={"/profile"}>
                        <a className="dropdown-item">
                          Profile
                        </a>
                      </Link>
                    </div>
                  </li>
                  {/* <Link href={"#"}> */}
                  <li className="nav-item" style={{ cursor: "pointer" }}>
                    <a className="nav-link" onClick={() => { props.triggerLogout() }}>Logout</a>
                  </li>
                  {/* </Link> */}
                </ul>
              )
              :
              (
                <ul className="navbar-nav">
                  <Link href={"/register"}>
                    <li className="nav-item" style={{ cursor: "pointer" }}>
                      <a className="nav-link">Sign Up</a>
                    </li>
                  </Link>
                  <Link href={"/login"}>
                    <li className="nav-item" style={{ cursor: "pointer" }}>
                      <a className="nav-link">Login</a>
                    </li>
                  </Link>
                </ul>
              )
            }
          </div>
        </div>
      </nav>
    </React.Fragment>
  )
}

export default connect(mapStateToProps)(NavBar);