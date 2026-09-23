// App.jsx

import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {

  // Store API users
  const [users, setUsers] = useState([]);

  // Store loading status
  const [loading, setLoading] = useState(false);

  // Store error message
  const [error, setError] = useState("");


  // Fetch users from API
  const getData = async () => {

    setLoading(true);
    setError("");

    try {

      const response = await axios.get(
        "https://dummyjson.com/users"
      );

      setUsers(response.data.users);

    } catch (error) {

      console.error("Error fetching users:", error);

      setError(
        "Unable to fetch users. Please try again."
      );

    } finally {

      setLoading(false);

    }
  };


  return (

    <div className="app">

      <div className="dashboard">

        {/* ================= HEADER ================= */}

        <div className="header">

          <div className="header-content">

            <p className="small-title">
              API DASHBOARD
            </p>

            <h1>
              User Dashboard
            </h1>

            <p className="description">
              Fetch and display user information
              from a REST API.
            </p>

          </div>


          {/* USER COUNT */}

          <div className="user-count">

            <span>
              {users.length}
            </span>

            <small>
              Users
            </small>

          </div>

        </div>


        {/* ================= BUTTON ================= */}

        <div className="action-section">

          <button
            className="fetch-btn"
            onClick={getData}
            disabled={loading}
          >

            {loading
              ? "Loading Users..."
              : "Get User Data"
            }

          </button>

        </div>


        {/* ================= ERROR ================= */}

        {error && (

          <div className="error-box">
            {error}
          </div>

        )}


        {/* ================= USERS ================= */}

        <div className="users-container">


          {/* EMPTY STATE */}

          {users.length === 0 &&
            !loading &&
            !error && (

              <div className="empty-state">

                <div className="empty-icon">
                  👤
                </div>

                <h3>
                  No Users Yet
                </h3>

                <p>
                  Click the button above
                  to fetch users.
                </p>

              </div>

            )
          }


          {/* USER CARDS */}

          {users.map((user) => (

            <div
              className="user-card"
              key={user.id}
            >

              <img
                className="avatar"
                src={user.image}
                alt={`${user.firstName} ${user.lastName}`}
              />


              <div className="user-info">

                <h3>
                  {user.firstName} {user.lastName}
                </h3>

                <p className="username">
                  @{user.username}
                </p>


                <div className="details">

                  <span>
                    📧 {user.email}
                  </span>

                  <span>
                    📍 {user.address.city}
                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

};

export default App;