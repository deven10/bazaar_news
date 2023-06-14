import React, { useContext } from "react";
import { Navbar } from "../../components/Header/Navbar";

import { QuickLinks } from "../../components/QuickLinks/QuickLinks";
import { ContextUsers } from "../../contexts/UsersContext";
import { ContextPosts } from "../../contexts/PostsContext";

import "./Home.css";

import deven from "../../images/deven.jpg";

export const Home = () => {
  const { usersData } = useContext(ContextUsers);
  const { postsData } = useContext(ContextPosts);

  return (
    <div>
      <Navbar />
      <div className="default-page-margin">
        <div className="container">
          <div className="row">
            {/* Quick Links section (left one) */}
            <div className="col-md-3">
              <QuickLinks />
            </div>
            {/* Users Posts sections (middle one) */}
            <div className="col-md-5">
              <div className="users-post-section-wrapper">
                <div className="default-section-block create-a-post-section">
                  <img className="logged-in-user-img" src={deven} alt="deven" />
                  <div className="create-a-post-wrapper">
                    <textarea
                      className="create-a-post-input"
                      placeholder="What's happening?"
                    ></textarea>
                    <div className="create-a-post-footer-wrapper">
                      <i className="fa-solid fa-image"></i>
                      <button className="add-new-post-button">Post</button>
                    </div>
                  </div>
                </div>

                <div className="users-posts-section">
                  <div className="default-section-block filters-wrapper">
                    <p>Latest Posts</p>
                    <i className="fa-solid fa-filter"></i>
                  </div>

                  <div className="posts-wrapper">
                    {postsData?.map((post) => {
                      return (
                        <div
                          className="default-section-block posts"
                          key={post._id}
                        >
                          <div className="post-user-img">
                            <img src={deven} alt="deven" />
                          </div>
                          <div className="post-details">
                            <div className="post-user-created-date">
                              <p className="post-user-date">
                                {post.firstName} {post.lastName} ·{" "}
                                <span>Dec 19, 2022</span>
                              </p>
                              <div className="post-edit-or-delete-options">
                                ...
                              </div>
                            </div>
                            <p className="post-user-username">
                              @{post.username}
                            </p>
                            <p className="post-user-content">{post.content}</p>
                            <div className="post-call-to-action-buttons">
                              <i className="fa-regular fa-heart"></i>
                              <i className="fa-regular fa-comment"></i>
                              <i className="fa-solid fa-share-nodes"></i>
                              <i className="fa-regular fa-bookmark"></i>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            {/* Search box & suggested users (right one) */}
            <div className="col-md-4">
              <div className="suggested-users-wrapper">
                <div className="default-section-block">
                  <div className="search-bar">
                    <input
                      type="text"
                      className="search-box"
                      placeholder="Search Posts, Users..."
                    />
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </div>
                </div>
                <div className="default-section-block">
                  <div className="suggested-users">
                    <p className="title">Suggested Users</p>
                    {usersData?.map((user) => {
                      return (
                        <div key={user._id} className="individual-user">
                          <img
                            className="suggested-users-img"
                            src={deven}
                            alt="deven"
                          />
                          <div>
                            <p className="name">
                              {user.firstName} {user.lastName}
                            </p>
                            <p className="username">@{user.username}</p>
                          </div>
                          <button className="follow-button">
                            Follow
                            <div className="arrow-wrapper">
                              <div className="arrow"></div>
                            </div>
                          </button>
                        </div>
                      );
                    })}
                    {/* <div className="individual-user">
                      <img
                        className="suggested-users-img"
                        src={deven}
                        alt="deven"
                      />
                      <div>
                        <p className="name">Tanay Pratap</p>
                        <p className="username">@pratap_tanay</p>
                      </div>
                      <button className="follow-button">
                        Follow
                        <div className="arrow-wrapper">
                          <div className="arrow"></div>
                        </div>
                      </button>
                    </div>
                    <div className="individual-user">
                      <img
                        className="suggested-users-img"
                        src={deven}
                        alt="deven"
                      />
                      <div>
                        <p className="name">Tanay Pratap</p>
                        <p className="username">@pratap_tanay</p>
                      </div>
                      <button className="follow-button">
                        Follow
                        <div className="arrow-wrapper">
                          <div className="arrow"></div>
                        </div>
                      </button>
                    </div>
                    <div className="individual-user">
                      <img
                        className="suggested-users-img"
                        src={deven}
                        alt="deven"
                      />
                      <div>
                        <p className="name">Tanay Pratap</p>
                        <p className="username">@pratap_tanay</p>
                      </div>
                      <button className="follow-button">
                        Follow
                        <div className="arrow-wrapper">
                          <div className="arrow"></div>
                        </div>
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
