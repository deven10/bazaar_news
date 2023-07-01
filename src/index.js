import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { AuthContext, ContextAuth } from "./contexts/AuthContext";
import { ContextUsers, UsersContext } from "./contexts/UsersContext";
import { PostsContext, ContextPosts } from "./contexts/PostsContext";

// Call make Server
makeServer();

export { ContextAuth, ContextUsers, ContextPosts };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContext>
        <PostsContext>
          <UsersContext>
            <App />
          </UsersContext>
        </PostsContext>
      </AuthContext>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
