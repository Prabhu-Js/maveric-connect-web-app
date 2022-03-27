import React, { useState } from "react";
import axios from "axios";
import "./style.css";
import Endpoints from "../../api/Endpoints.js/index.js";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  let navigate = useNavigate();
  const [responseMessage, setResponseMessage] = useState({
    message: "",
    cssClass: "",
  });

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function onSubmitHandler(e) {
    e.preventDefault();
    axios
      .post(Endpoints.LOGIN_URL, user)
      .then(
        (response) => {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.user));
          console.log(response.data);
          setResponseMessage({
            message: "login successful",
            cssClass: "alert-success",
          });
        },
        (error) => {
          setResponseMessage({
            message: error.response.data.message,
            cssClass: "alert-danger",
          });
        }
      )
      .catch((error) => {
        console.log(error);
      });
  }

  function onChangeHandler(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  function onClickHandler(e) {
    e.preventDefault();
    navigate("/postList");
  }

  return (
    <div className="wrapper">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
          <div className="wrapper text-center">
            <h3>Login</h3>
            {responseMessage.message && (
              <div className="alert alert-success" role="alert">
                {responseMessage.message}
              </div>
            )}
            <form onSubmit={onClickHandler}>
              <div className="form-group">
                <input
                  placeholder="Email"
                  type="text"
                  name="email"
                  onChange={onChangeHandler}
                  className="form-control text-left"
                  value={user.email}
                />
              </div>
              <div className="form-group">
                <input
                  placeholder="Password"
                  type="password"
                  name="password"
                  onChange={onChangeHandler}
                  className="form-control text-leftr"
                  value={user.password}
                />
              </div>
              
              <input
                type="submit"
                value="Login"
                className="btn btn-primary btn-block"
              />
              <a href="/signup">
                <br />
                New to Maveric Book? signup
              </a>
              <a href="#">
                <br />
                forgot password?
              </a>
            </form>
          </div>
        </div>
        <div className="col-lg-3"></div>
      </div>
    </div>
  );
};
export default Login;
