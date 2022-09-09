import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from 'next/image';

const UpdateProfile = (props) => {
    return (

        <React.Fragment>
            <div>

                {/* Start Profile */}
                <div className="jumbotron jumbotron-fluid bg-image headergame" id="login">
                    <div className="mt-5">
                        <h1>Update Profile</h1>
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
                                                // value={profile.username || ''}
                                                value={''}
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
                                                // value={profile.fullname || ''}
                                                value={''}
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
                                                // value={profile.email || ''}
                                                value={''}
                                                readOnly
                                            />
                                        </div>
                                        <div className="d-grid mt-5">
                                            <button
                                                className="btn btn-warning btn-login font-weight-bold text-uppercase w-100 "
                                                type="submit"
                                            >
                                                Save Profile
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

export default UpdateProfile