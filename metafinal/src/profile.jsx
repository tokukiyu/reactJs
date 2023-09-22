import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Profile() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the API URL
    const apiUrl = 'http://localhost:3000/api/v1/user/myprofile';

    // Make a POST request to the API
    axios
      .post(apiUrl, {}, {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTBiMWU1ODhhMzhjZTA5ZmZmNmRhMjgiLCJlbWFpbCI6ImRhaWhAZ2FtLmNvbSIsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY5NTM3MzI5OCwiZXhwIjoxNjk1Mzc2ODk4fQ.-BrwWEC6Cz7-xOjTXmxjVswElEqnRV7pOgPBbsUdBhw', // Replace with your JWT token
        },
      })
      .then((response) => {
        // Handle successful response
        setUserData(response.data.data);
      })
      .catch((err) => {
        // Handle error
        setError(err.message);
      });
  }, []);

  return (
    <div>
      {error && <p>Error: {error}</p>}
      {userData && (
        <div>
          <h2>User Profile</h2>
          <p>User ID: {userData.userId}</p>
          <p>Username: {userData.username}</p>
          <p>Email: {userData.email}</p>
          <p>Role: {userData.role}</p>
          {/* Add other user data fields as needed */}
        </div>
      )}
    </div>
  );
}

export default Profile;
