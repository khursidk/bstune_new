import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

const RevenueClient = () => {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const { id } = jwtDecode(token);
        setUserId(id);
      } catch (error) {
        console.error("Invalid token:", error);
      }
    }
  }, []);

  const handleDownload = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/user/downloadRevenue/${userId}`, {
        responseType: 'blob',
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'revenue.pdf');
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };

  return (
    <>
            <h1 style={{textAlign:"center",color:"#ff0000", marginTop:"50px"}}>Revenue</h1>
      <button style={{margin:"auto",display:"flex",justifyContent:"center"}} onClick={handleDownload}>Download Revenue PDF</button>
    </>
  );
};

export default RevenueClient;
