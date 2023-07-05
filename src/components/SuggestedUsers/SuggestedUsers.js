import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ContextUsers } from "../../contexts/UsersContext";

export const SuggestedUsers = ({ usersData }) => {
  const navigate = useNavigate();
  const { followUser } = useContext(ContextUsers);
  const loggedInUser = JSON.parse(localStorage.getItem("user"));

  const [userLoggedIn, setUserLoggedIn] = useState({});
  // const [showUsers, setShowUsers] = useState(usersData);

  useEffect(() => {
    const userLoggedIn = usersData.find(
      (user) => user.username === loggedInUser.username
    );
    setUserLoggedIn(() => userLoggedIn);
  }, [usersData]);

  // useEffect(() => {
  //   const withoutLoggedInUser = usersData.filter(
  //     (user) => user.username !== loggedInUser?.username
  //   );
  //   if (userLoggedIn?.following?.length > 0) {
  //     const withoutFollowingUsers = withoutLoggedInUser.filter((user) =>
  //       userLoggedIn?.following?.find(
  //         (followingUser) => followingUser.username !== user.username
  //       )
  //     );
  //     setShowUsers(withoutFollowingUsers);
  //     console.log("inside");
  //   } else {
  //     setShowUsers(withoutLoggedInUser);
  //     console.log("outside");
  //   }
  // }, [usersData]);

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
            {/* {showUsers?.map((user) => {
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
                      className="name"
                      onClick={() => navigate(`/user/${user.username}`)}
                    >
                      {user.firstName} {user.lastName}
                    </p>
                    <p
                      className="username"
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
            })} */}
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
                        src={user?.avatar}
                        alt={user.username}
                        onClick={() => navigate(`/user/${user.username}`)}
                      />
                      <div>
                        <p
                          className="name"
                          onClick={() => navigate(`/user/${user.username}`)}
                        >
                          {user.firstName} {user.lastName}
                        </p>
                        <p
                          className="username"
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
