import React, { useEffect, useState } from "react"
import { connect } from "react-redux";
import Head from "next/head"
import Link from "next/link"
import APIRequest from '../../components/library/request/apiRequest'
import { useRouter } from "next/router";
import { IKImage } from "imagekitio-react"


const mapStateToProps = (state, ownProps) => ({
    stateObject: state
})

const MainProfile = (props) => {
    const dataUser = props.stateObject.user !== 'undefined' ? props.stateObject.user : {}

    /*   const dataUser = {
          id:21
      } */
    const API = `${process.env.NEXT_PUBLIC_APIURL}users/${dataUser.id}`
    const [profile, setProfile] = useState([])
    const getProfile = () => {
        APIRequest('GET', API)
            .then(response => {
                console.log(response)
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


    return (
        <React.Fragment>
            <head>
                <link rel="stylesheet" href="css/Profile.css" />
            </head>
            <div>

                {/* Start Profile */}
                <div className='background'>
                    <div className='profile-container'>
                        <div className='user-data'>
                            <div>
                                <IKImage className="profile-pic"
                                    urlEndpoint="https://ik.imagekit.io/92lyfgj0t"
                                    src={dataUser?.img_url ? dataUser.img_url : "https://ik.imagekit.io/92lyfgj0t/blank-profile-picture-973460__340_-4k_Y18nB.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1662622610933"}
                                    transformation={[{
                                        h: "150",
                                        w: "150",
                                        r: "max"

                                    }]}

                                    laoding="lazy"
                                />
                            </div>
                            <div>
                                <h2 className='data-title'>USER ID</h2>
                                <p>{profile?.id}</p>
                            </div>
                            <div>
                                <h2 className='data-title'>USERNAME</h2>
                                <p>{profile?.username}</p>
                            </div>
                            <div>
                                <h2 className='data-title'>FULLNAME</h2>
                                <p>{profile?.fullname}</p>
                            </div>
                        </div>
                        <div className='user-bio'>
                            <div>
                                <h2 className='data-title'>BIO</h2>
                                <p>{profile?.bio ? profile?.bio : "User To Lazy To Write Bio"}</p>
                            </div>
                        </div>

                        <div className='user-data'>
                            <div>
                                <h2 className='data-title'>TOTAL SCORE</h2>
                                <p>{profile?.total_score ? profile?.total_score : "No Score Yet"}</p>
                            </div>
                            <div className="button-container">
                                <Link href={"/profilechange"}>
                                    <button className='edit-button'>EDIT</button>
                                </Link>

                            </div>



                        </div>

                    </div>
                </div>
                {/* <div className="jumbotron jumbotron-fluid bg-image headergame" id="login">
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
                                                Update Profile
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* End Profile */}
            </div>
        </React.Fragment>
    )
}

export default connect(mapStateToProps)(MainProfile)
