import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'
import Head from "next/head"
import axios from "axios"
import * as Yup from 'yup'
import Swal from "sweetalert2"

const RegisterForm = (props) => {
  const router = useRouter()
  const formSchema = Yup.object().shape({
    username: Yup.string()
      .required('Username tidak boleh kosong'),
    password: Yup.string()
      .required('Password tidak boleh kosong')
      .min(6, 'Password minimal 6 karakter'),
    fullname: Yup.string()
      .required('Fullname tidak boleh kosong'),
    email: Yup.string()
      .required('Email tidak boleh kosong'),
  })
  const validationOpt = { resolver: yupResolver(formSchema) }
  const { register, handleSubmit, reset, formState: { errors } } = useForm(validationOpt)

  const [btnSubmit, setBtnSubmit] = useState(false)

  const onFormSubmit = data => {
    setBtnSubmit(true)
    axios({
      url: `${process.env.NEXT_PUBLIC_APIURL}register`,
      method: 'POST',
      data,
      headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': '*'
      }
    }).then(response => {
      Swal.fire({
        title: "Berhasil ditambahkan",
        icon: "success",
        customClass: {
          confirmButton: "btn btn-success"
        }
      }).then((result) => {
        if (result.isConfirmed) {
          setBtnSubmit(false)
          router.push('/login')
        }
      })
    }).catch(error => {
      Swal.fire({
        title: "Terjadi kesalahan!",
        icon: "error",
        customClass: {
          confirmButton: "btn btn-success"
        }
      })
      setBtnSubmit(false)
    })
  }

  return (
    <>
      <Head>
        <title>Register Binar Challenge</title>
      </Head>

      {/* Start Register */}
      <div
        className="jumbotron jumbotron-fluid bg-image headergame"
        id="register"
      >
        <div className="mt-5">
          <h1>Sign Up</h1>
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-4 mx-auto">
              <div className="card border-0 shadow rounded-3 my-5">
                <div className="card-body p-4 p-sm-5">
                  <form onSubmit={handleSubmit(onFormSubmit)}>
                    <div className="form-group">
                      <label
                        htmlFor="exampleInputFullname"
                        style={{ color: "black" }}
                      >
                        Fullname
                      </label>
                      <input
                        type="text"
                        {...register('fullname')}
                        className={`form-control ${errors.fullname ? 'is-invalid' : ''}`}
                        id="fullname"
                        aria-describedby="fullnameHelp"
                        placeholder="Enter fullname"
                      />
                      <div className="invalid-feedback">{errors.fullname?.message}</div>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="exampleInputEmail"
                        style={{ color: "black" }}
                      >
                        Email address
                      </label>
                      <input
                        type="text"
                        {...register('email')}
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                      />
                      <div className="invalid-feedback">{errors.email?.message}</div>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="exampleInputUsername"
                        style={{ color: "black" }}
                      >
                        Username
                      </label>
                      <input
                        type="text"
                        {...register('username')}
                        className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                        id="username"
                        aria-describedby="usernameHelp"
                        placeholder="Enter username"
                      />
                      <div className="invalid-feedback">{errors.username?.message}</div>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="exampleInputPassword"
                        style={{ color: "black" }}
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        {...register('password')}
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                        id="password"
                        aria-describedby="passwordHelp"
                        placeholder="Enter password"
                      />
                      <div className="invalid-feedback">{errors.password?.message}</div>
                    </div>
                    <div className="d-grid mt-5">
                      <button
                        className="btn btn-warning btn-login font-weight-bold text-uppercase w-100"
                        type="submit"
                        disabled={btnSubmit}
                        data-kt-indicator={btnSubmit ? 'on' : 'off'}
                      >
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container"> */}
        {/* <div className="">
            <h1>Register</h1>
            <a href="#" className="btn btn-warning">
              Submit
            </a>
          </div> */}
        {/* <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-8 offset-lg-8 offset-md-3 offset-sm-2 twittercards">
              <div className="card text-white bg-dark mb-4">
                <div className="card-header">
                  <img
                    src="assets/evan-lahti.jpg"
                    className="img-fluid float-left profilepic"
                    alt="Evan Lahti"
                  />
                  <h3>Evan Lahti</h3>
                  <h4>PC Gamer</h4>
                  <img
                    src="assets/twitter.svg"
                    className="img-fluid float-right twitterlogo"
                    alt="twitterlogo"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    One of my gaming highlights of the year.
                  </h5>
                  <p className="card-text">October 18, 2021</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-8 offset-lg-6 offset-md-3 offset-sm-2 twittercards">
              <div className="card text-white bg-dark mb-4">
                <div className="card-header">
                  <img
                    src="assets/jada-griffin.jpg"
                    className="img-fluid float-left profilepic"
                    alt="Jada Griffin"
                  />
                  <h3>Jada Griffin</h3>
                  <h4>Nerdreactor</h4>
                  <img
                    src="assets/twitter.svg"
                    className="img-fluid float-right twitterlogo"
                    alt="twitterlogo"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    The next big thing in the world of streaming and survival
                    games.
                  </h5>
                  <p className="card-text">July 10, 2021</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-8 offset-lg-7 offset-md-3 offset-sm-2 twittercards">
              <div className="card text-white bg-dark mb-1">
                <div className="card-header">
                  <img
                    src="assets/aaron-williams.jpg"
                    className="img-fluid float-left profilepic"
                    alt="Aaron Williams"
                  />
                  <h3>Aaron Williams</h3>
                  <h4>Uproxx</h4>
                  <img
                    src="assets/twitter.svg"
                    className="img-fluid float-right twitterlogo"
                    alt="twitterlogo"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Snoop Dogg Playing The Wildly Entertaining SOS Is Ridiculous
                  </h5>
                  <p className="card-text">December 24, 2018</p>
                </div>
              </div>
            </div>
          </div> */}
        {/* </div> */}
      </div>
      {/* End Register */}
    </>
  )
}

export default RegisterForm
