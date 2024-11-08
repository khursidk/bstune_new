import React, { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";

const Releases = () => {
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
      <h1 style={{ textAlign: "center", marginTop: "50px", color: "#ff0000" }}>
        Releases
      </h1>
      {loading && (
        <p style={{ textAlign: "center", color: "white" }}>Loading...</p>
      )}
      {error && <p style={{ textAlign: "center", color: "white" }}>{error}</p>}
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {userData
          .slice()
          .reverse()
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
                    height: "200px",
                    width: "200px",
                    borderRadius: "20px",
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                    cursor: "pointer",
                  }}
                />
                <h3 style={{ textAlign: "center" }}>{song.title}</h3>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default Releases;
