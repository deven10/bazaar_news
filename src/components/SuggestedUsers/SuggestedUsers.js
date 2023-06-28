import React, { useContext, useState, useEffect } from "react";

import { ContextUsers } from "../../contexts/UsersContext";

import deven from "../../images/deven.jpg";

export const SuggestedUsers = ({ usersData }) => {
  const { followUser } = useContext(ContextUsers);
  const loggedInUser = JSON.parse(localStorage.getItem("user"));

  const [userLoggedIn, setUserLoggedIn] = useState({});

  useEffect(() => {
    const userLoggedIn = usersData.find(
      (user) => user.username === loggedInUser.username
    );
    setUserLoggedIn(() => userLoggedIn);
  }, [usersData]);

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
                  {user.username === loggedInUser?.username ? (
                    ""
                  ) : userLoggedIn?.following?.find(
                      (followingUser) =>
                        followingUser.username === user.username
                    ) ? (
                    ""
                  ) : (
                    <>
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

                      <button
                        onClick={() => followUser(user._id)}
                        className="follow-button"
                      >
                        Follow
                        <div className="arrow-wrapper">
                          <div className="arrow"></div>
                        </div>
                      </button>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
