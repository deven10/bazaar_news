import React from "react";
import { Navbar } from "../../components/Header/Navbar";

import { QuickLinks } from "../../components/QuickLinks/QuickLinks";

import "./Home.css";

import deven from "../../images/deven.jpg";

export const Home = () => {
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
                <div className="default-section-block users-posts-section">
                  hello world
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
                        <div class="arrow-wrapper">
                          <div class="arrow"></div>
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
                        <div class="arrow-wrapper">
                          <div class="arrow"></div>
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
                        <div class="arrow-wrapper">
                          <div class="arrow"></div>
                        </div>
                      </button>
                    </div>
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
