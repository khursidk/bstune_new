import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RevenueAdmin = () => {
  const [userData, setUserData] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/user/allUsers`);
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleFileUpload = async (userId) => {
    if (!selectedFile) return alert("Please select a file.");

    const formData = new FormData();
    formData.append("revenue", selectedFile);

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/user/uploadRevenue/${userId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Revenue PDF uploaded successfully!");
    } catch (error) {
      console.error("Error uploading PDF:", error);
    }
  };

  return (
    <>
      <h1>Revenue</h1>
      {userData.map((user) => (
        <div key={user._id}>
          <h2>Label: {user.name}</h2>
          <input type="file" accept="application/pdf" onChange={handleFileChange} />
          <button onClick={() => handleFileUpload(user._id)}>Send</button>
        </div>
      ))}
    </>
  );
};

export default RevenueAdmin;
