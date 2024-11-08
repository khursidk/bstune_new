import React, { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  const [id, setId] = useState("");
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const { id } = jwtDecode(token);
        setId(id);
      } catch (error) {
        console.error("Invalid token:", error);
        setError("Invalid token");
        setLoading(false); 
      }
    } else {
      setError("No token found");
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!id) return;

    const fetchSongs = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/user/getSongs/${id}`
        );
        if (response.data.length === 0) {
          setError("No songs added");
        } else {
          setUserData(response.data);
          setError("");
        }
      } catch (error) {
        console.error("There was an error fetching the songs!", error);
        setError("There was an error fetching the songs!");
      } finally {
        setLoading(false);
      }
    };

    fetchSongs();
  }, [id]);
  return (
    <>
    <div style={{paddingLeft:"100px",paddingRight:"100px"}}>  
    <h2 style={{marginTop:"50px"}}>Recent <span style={{color:"#ff0000"}}>Releases</span></h2>
    <div style={{backgroundColor:"lightcoral", width:"100%",height:"200px",padding:"20px",borderRadius:"30px"}}>
    {loading && (
        <p style={{ textAlign: "center", color: "gray" }}>Loading...</p>
      )}
      {error && <p style={{ textAlign: "center", color: "gray" }}>{error}</p>}
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {userData
          .slice()
          .reverse()
          .slice(0, 4)
          .map((song) => (
            <div key={song._id}>
              <Link
                to={`/dashboard/releases/songDetails/${song._id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <img
                  src={`${import.meta.env.VITE_API_URL}/${song.poster}`}
                  alt={`${song.title} poster`}
                  style={{
                    height: "150px",
                    width: "150px",
                    borderRadius: "20px",
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                    cursor: "pointer",
                  }}
                />
              </Link>
            </div>
          ))}
      </div>
    </div>
    <h2 style={{marginTop:"50px"}}>Useful <span style={{color:"#ff0000"}}>Links</span></h2>
    <div style={{backgroundColor:"lightgrey", width:"100%",height:"200px",padding:"20px",borderRadius:"30px"}}>
      <h2 style={{color:"white"}}>No LInks...</h2>
    </div>
    </div>
    </>
  )
}

export default UserDashboard
