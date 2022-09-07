import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useRouter } from "next/router"
import * as Yup from "yup"
import Swal from "sweetalert2"
import axios from "axios"
import Head from "next/head"

const LoginForm = (props) => {
  const router = useRouter()
  const formSchema = Yup.object().shape({
    username: Yup.string().required("Username tidak boleh kosong"),
    password: Yup.string()
      .required("Password tidak boleh kosong")
      .min(6, "Password minimal 6 karakter"),
  })
  const validationOpt = { resolver: yupResolver(formSchema) }
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm(validationOpt)

  const [btnSubmit, setBtnSubmit] = useState(false)

  const onFormSubmit = (data) => {
    setBtnSubmit(true)
    axios({
      url: `${process.env.NEXT_PUBLIC_APIURL}login`,
      method: "POST",
      data,
      headers: {
        Accept: "application/json",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => {
        setBtnSubmit(false)
        if (response.status === 200) {
          const dataUser = response.data.data
          const user = {
            id: dataUser.id,
            name: dataUser.fullname,
            email: dataUser.email,
            username: dataUser.username,
          }

          const accessToken = response.data.data.accessToken

          window.localStorage.setItem(
            "game_identifier",
            response.data.data.accessToken
          )
          // window.localStorage.setItem(
          //   "id",
          //   response.data.data.id
          // )
          if (props.setReduxStore) {
            props.setReduxStore(user, accessToken, true)
          }

          router.push("/")
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Username atau Password salah!!!",
          icon: "error",
          customClass: {
            confirmButton: "btn btn-success",
          },
        })
        setBtnSubmit(false)
      })
  }
  return (
    <>
      <Head>
        <title>Login Binar Challenge</title>
      </Head>

      {/* Start Login */}
      <div className="jumbotron jumbotron-fluid bg-image headergame" id="login">
        <div className="mt-5">
          <h1>Login</h1>
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-4 mx-auto">
              <div className="card border-0 shadow rounded-3 my-5">
                <div className="card-body p-4 p-sm-5">
                  {/* <form onSubmit={handleSubmit(onFormSubmit)}>
                    <div className="form-group">
                      <label
                        htmlFor="exampleInputUsername"
                        style={{ color: "black" }}
                      >
                        Fullname
                      </label>
                      <input
                        type="text"
                        {...register("username")}
                        className={`form-control form-control-lg form-control-solid ${
                          errors.username ? "is-invalid" : ""
                        }`}
                        id="exampleInputUsername"
                        aria-describedby="fullnameHelp"
                        placeholder="Enter Fullname"
                      />
                      <div className="invalid-feedback">
                      {errors.username?.message}
                      </div>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="exampleInputUsername"
                        style={{ color: "black" }}
                      >
                        Fullname
                      </label>
                      <input
                        type="password"
                        {...register("password")}
                        className={`form-control form-control-lg form-control-solid ${
                          errors.username ? "is-invalid" : ""
                        }`}
                        id="exampleInputPassword"
                        aria-describedby="passwordHelp"
                        placeholder="Enter Password"
                      />
                      <div className="invalid-feedback">
                        {errors.password?.message}
                      </div>
                    </div>
                    <div className="d-grid">
                      <button
                        className="btn btn-primary btn-login"
                        type="submit"
                        disabled={btnSubmit}
                        data-kt-indicator={btnSubmit ? "on" : "off"}
                      >
                        Sign in
                      </button>
                    </div>
                  </form> */}
                  <form onSubmit={handleSubmit(onFormSubmit)}>
                    <div className="form-group">
                      <label
                        htmlFor="exampleInputUsername"
                        style={{ color: "black" }}
                      >
                        Username
                      </label>
                      <input
                        type="text"
                        {...register("username")}
                        className={`form-control ${errors.username ? "is-invalid" : ""
                          }`}
                        id="username"
                        aria-describedby="emailUsername"
                        placeholder="Enter username"
                      />
                      <div className="invalid-feedback">
                        {errors.username?.message}
                      </div>
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
                        {...register("password")}
                        className={`form-control ${errors.username ? "is-invalid" : ""
                          }`}
                        id="password"
                        aria-describedby="passwordHelp"
                        placeholder="Enter password"
                      />
                      <div className="invalid-feedback">
                        {errors.password?.message}
                      </div>
                    </div>
                    <div className="d-grid mt-5">
                      <button
                        className="btn btn-warning btn-login font-weight-bold text-uppercase w-100 "
                        type="submit"
                        disabled={btnSubmit}
                        data-kt-indicator={btnSubmit ? "on" : "off"}
                      >
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Login */}
    </>
  )
}

export default LoginForm
