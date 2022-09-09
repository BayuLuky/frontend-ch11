import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import APIRequest from "../library/request/apiRequest";
import Swal from "sweetalert2";
import { connect } from "react-redux";
import axios from "axios";

const mapStateToProps = (state, ownProps) => ({
  stateObject: state
})
function Update(props) {
  const dataUser = props.stateObject.user !== 'undefined' ? props.stateObject.user : {} 
  const API = `${process.env.NEXT_PUBLIC_APIURL}users/${dataUser?.id}`;
  const token = window.localStorage.getItem("game_identifier")
  const [profile, setProfile] = useState([]);
  const [change,setChange]=useState({
    username:"",
    email:"",
    fullname:""
  })
  function handleSubmit(){
    axios({
      url:URL,
      method:"PUT",
      body:change,
      headers:{
        authorization:token
      }
    }).then(res=>{
      console.log(res)
    })
  }
  const getProfile = () => {
    APIRequest("GET", API)
      .then((response) => {
        const profile = response.data;
        setProfile(profile);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    return getProfile();
  }, []);
  return (
    <>
      <div className="jumbotron jumbotron-fluid bg-image headergame">
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
                      placeholder={profile.username}
                      onChange={(e)=>{
                        setChange({...change,username:e.target.value})
                 
                      }}
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
                      placeholder={profile.fullname}
                      onChange={(e)=>{
                        setChange({...change,fullname:e.target.value})
                   
                      }}
                
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
                      placeholder={profile.email}
                      onChange={(e)=>{
                        setChange({...change,email:e.target.value})
                        console.log(change)
                      }}
                    />
                  </div>
                  <div className="d-grid mt-5">
                    <button
                      className="btn btn-warning btn-login font-weight-bold text-uppercase w-100 "
                      onClick={handleSubmit}
                    >
                      Update Profile
                    </button>
                    <Link href={"/userpic"}>
                    <button
                    style={{marginTop:"1rem"
                    }}
                      className="btn btn-warning btn-login font-weight-bold text-uppercase w-100 "
                      type="submit"
                    >
                      Update Profile Pic
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default connect(mapStateToProps)(Update)
