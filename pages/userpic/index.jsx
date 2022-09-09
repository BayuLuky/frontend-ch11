import React, { useRef, useState } from "react";
import { IKImage, IKUpload, IKContext } from "imagekitio-react";
import ReactPlayer from "react-player";
import Swal from "sweetalert2";
import { useRouter } from 'next/router'
import APIRequest from "../../components/library/request/apiRequest";
import { useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";

const mapStateToProps = (state, ownProps) => ({
  stateObject: state
})
//import {Player} from 'video-react'
//import 'video-react/dist/video-react.css';

const ImageKit = require("imagekit");
function Upload(props) {
  const dataUser = props.stateObject.user !== 'undefined' ? props.stateObject.user : {} 
  
  const URL = `${process.env.NEXT_PUBLIC_APIURL}users/${dataUser?.id}`
  const router = useRouter()
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");
  const imagekit = new ImageKit({
    publicKey: "public_Qdywgm0HQ8g1LM+tpmhFjhsPg6c=",
    privateKey: "private_Ole1dh87WokQzzJtqRclm6pHv7Y=",
    urlEndpoint: "https://ik.imagekit.io/92lyfgj0t",
  });
  useEffect(()=>{
    APIRequest("GET",URL).then(res=>{
      setImage(res.img_url)
      console.log(typeof res.img_url)
    })
  },[])
  function handleSubmit() {
    imagekit
      .upload({
        file: file,
        fileName: file.name,
      })
      .then((res) => {
        console.log(res);
        /* setImage(res.url); */
        const token =window.localStorage.getItem("game_identifier")
        axios({
          url:URL,
          method:"PUT",
          body:{
            img_url:res?.url
          },
          headers:{
            authorization:token
          }
        })
        Swal.fire({
          title: "Change Succes",
          icon: "success",
          customClass: {
            confirmButton: "btn btn-success",
          }
        }).then(res=>{
          console.log(res)
         /*  if(res.isConfirmed){
            router.push("/profile")
          } */
        })

      });
  }
  return (
    <>
      <div className="jumbotron jumbotron-fluid bg-image headergame">
        <div className="mt-5">
          <h1>Profile Picture</h1>
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-4 mx-auto">
              <div style={{
                    background:"black",
                    borderRadius:"10px"
                }}className="card border-0 shadow rounded-3 my-5 ">
                <div  className="card-body p-4 p-sm-5">
                  <IKImage
                    urlEndpoint="https://ik.imagekit.io/92lyfgj0t"
                    src={typeof image!=="undefined"? image:"https://ik.imagekit.io/92lyfgj0t/blank-profile-picture-973460__340_-4k_Y18nB.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1662622610933"}
                    transformation={[{
                      h:"150",
                      w:"150",
                      r:"max"
                    }]}
                  
                    laoding="lazy"
                  />
                  <h3 style={{
                    margin:"1rem 0"
                  }}>SAEPUL</h3>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    
                      padding:"0.5rem"
                      ,borderRadius:"18px"
                    }}
                  >
                    <input
                      style={{ display: "block" }}
                      type="file"
                      onChange={(e) => {
                        console.log(e.target.files[0]);
                        setFile(e.target.files[0]);
                      }}
                    />
                  </div>
                  <button  style={{
                      width:"80%",
                      padding:"0.25rem",
                      margin:"1rem 0",
                      borderRadius:"10px",
                      color:"black",
                      background:"#FFB343",
                      border:"none",
                      fontWeight:"600"
                    }}
                    onClick={handleSubmit}>Change</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
export default connect(mapStateToProps)(Upload);
