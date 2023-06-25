import React from "react";

import deven from "../../images/deven.jpg";

export const SuggestedUsers = ({ usersData }) => {
  return (
    <div>
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
          </div>
        </div>
      </div>
    </div>
  );
};
