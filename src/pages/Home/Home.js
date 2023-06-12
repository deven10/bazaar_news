import React from "react";
import { Navbar } from "../../components/Header/Navbar";

import { QuickLinks } from "../../components/QuickLinks/QuickLinks";

import "./Home.css";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="default-page-margin">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <QuickLinks />
            </div>
            <div className="col-md-5">
              <div className="default-section-block">world</div>
            </div>
            <div className="col-md-4">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
