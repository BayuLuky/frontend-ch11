import React, { useEffect, useState } from "react"
import { connect } from "react-redux";
import Head from "next/head"
import Link from "next/link"
import APIRequest from '../../components/library/request/apiRequest'

const mapStateToProps = (state, ownProps) => ({
    stateObject: state
})

const MainProfile = (props) => {
    const dataUser = props.stateObject.user !== 'undefined' ? props.stateObject.user : {}
    const API = `${process.env.NEXT_PUBLIC_APIURL}users/${dataUser.id}`
    const [profile, setProfile] = useState([])

    const getProfile = () => {
        APIRequest('GET', API)
            .then(response => {
                const profile = response.data
                setProfile(profile)
            })
            .catch(err => {
                console.log('err', err)
            })
    }

    useEffect(() => {
        return getProfile()
    }, [])

    console.log(profile)

    return (
        <React.Fragment>
            <div>

                {/* Start Profile */}
                <div className="jumbotron jumbotron-fluid bg-image headergame" id="login">
                    <div className="mt-5">
                        <h1>Profile</h1>
                        <div className="row">
                            <div className="col-sm-9 col-md-7 col-lg-4 mx-auto">
                                <div className="card border-0 shadow rounded-3 my-5">
                                    <div className="card-body p-4 p-sm-5">
                                        <div className="form-group">
                                            <label
                                                htmlFor="exampleInputUsername"
                                                style={{ color: "black" }}
                                            >
                                                Username
                                            </label>
                                            <input
                                                type="text"
                                                className={`form-control`}
                                                id="username"
                                                aria-describedby="emailUsername"
                                                value={profile.username}
                                                readOnly
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label
                                                htmlFor="exampleInputUsername"
                                                style={{ color: "black" }}
                                            >
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                className={`form-control`}
                                                id="username"
                                                aria-describedby="emailUsername"
                                                value={profile.fullname}
                                                readOnly
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label
                                                htmlFor="exampleInputUsername"
                                                style={{ color: "black" }}
                                            >
                                                Email
                                            </label>
                                            <input
                                                type="text"
                                                className={`form-control`}
                                                id="username"
                                                aria-describedby="emailUsername"
                                                value={profile.email}
                                                readOnly
                                            />
                                        </div>
                                        <div className="d-grid mt-5">
                                            <button
                                                className="btn btn-warning btn-login font-weight-bold text-uppercase w-100 "
                                                type="submit"
                                            >
                                                Update Profile
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Profile */}
            </div>
        </React.Fragment>
    )
}

export default connect(mapStateToProps)(MainProfile)
