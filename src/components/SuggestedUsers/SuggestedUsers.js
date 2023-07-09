import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ContextUsers } from "../../contexts/UsersContext";
import { ContextTheme } from "../../contexts/ThemeContext";

export const SuggestedUsers = ({ usersData }) => {
  const navigate = useNavigate();
  const { themeToggler } = useContext(ContextTheme);
  const { followUser } = useContext(ContextUsers);
  const loggedInUser = JSON.parse(localStorage.getItem("user"));
  const [showUsers, setShowUsers] = useState([]);

  useEffect(() => {
    const userLoggedIn = usersData.find(
      (user) => user.username === loggedInUser.username
    );

    const filteredUsers = usersData?.filter((user) => {
      // Exclude the logged-in user
      if (user.username === loggedInUser?.username) {
        return false;
      }

      // Exclude users already being followed
      const isFollowing = userLoggedIn?.following?.some(
        (followingUser) => followingUser.username === user.username
      );
      if (isFollowing) {
        return false;
      }

      // Include the remaining users
      return true;
    });
    setShowUsers(() => filteredUsers);
  }, [usersData]);

  return (
    <div>
      <div className="suggested-users-wrapper">
        {/* <div className="default-section-block">
          <div className="search-bar">
            <input
              type="text"
              className="search-box"
              placeholder="Search Posts, Users..."
            />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div> */}
        {showUsers?.length > 0 ? (
          <div
            className={`default-section-block ${
              themeToggler === "dark" ? "dark" : ""
            }`}
          >
            <div className="suggested-users">
              <p className={`title ${themeToggler === "dark" ? "dark" : ""}`}>
                Suggested Users
              </p>
              {showUsers?.map((user) => {
                return (
                  <div key={user._id} className="individual-user">
                    <img
                      className="suggested-users-img"
                      src={user?.avatar}
                      alt={user.username}
                      onClick={() => navigate(`/user/${user.username}`)}
                    />
                    <div>
                      <p
                        className={`name ${
                          themeToggler === "dark" ? "dark" : ""
                        }`}
                        onClick={() => navigate(`/user/${user.username}`)}
                      >
                        {user.firstName} {user.lastName}
                      </p>
                      <p
                        className={`username ${
                          themeToggler === "dark" ? "dark" : ""
                        }`}
                        onClick={() => navigate(`/user/${user.username}`)}
                      >
                        @{user.username}
                      </p>
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
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
