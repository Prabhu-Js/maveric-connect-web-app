import React, { useState, useEffect } from "react";
import axios from "axios";
import Endpoints from "../../api/Endpoints.js";
import logo from "../../logos/profile-img.png";
import likesLogo from "../../logos/like-img.png";
import commentsLogo from "../../logos/comment-img.png";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";

const PostListItems = () => {
  const [users, setUsers] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    getPost();
  }, []);
  const getPost = () => {
    axios
      .get(Endpoints.GET_POSTS_URL)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="post-list">
      <h3 className="text-center"></h3>
      {users.map((customer) => (
        <div key={customer.id} className="container">
          <div class="list-group">
            <a
              href="#"
              onClick={() => {
                navigate(`/postDetail/${customer.id}`);
              }}
              class="list-group-item list-group-item-action"
              style={{ marginTop: "7px", width: "90%", marginLeft: "5%" }}
            >
              <div class="d-flex w-150">
                <p style={{ fontSize: "15px", color: "#224f8f" }}>
                  <img
                    src={logo}
                    className="img-thumbnail"
                    style={{ width: "70%" }}
                  />
                  <p
                    style={{
                      fontSize: "15px",
                      color: "#224f8f",
                      marginLeft: "15%"
                    }}
                  >
                    {customer.postedBy.firstName}
                  </p>
                </p>
                &nbsp; &nbsp; &nbsp;
                <span style={{ width: "130%"}}>{customer.post}</span>
              </div>

              <div class="d-flex w-100 justify-content-between">
                <small style={{ width: "13%", marginLeft: "60%" }}>
                  <img
                    src={likesLogo}
                    className="img-thumbnail"
                    style={{ width: "25%" }}
                  />
                  &emsp;{customer.likesCount} Likes
                </small>
                <small style={{ width: "13%", marginLeft: "10%" }}>
                  <img
                    src={commentsLogo}
                    className="img-thumbnail"
                    style={{ width: "25%" }}
                  />
                  &emsp;{customer.commentsCount} Comments
                </small>
              </div>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
export default PostListItems;
