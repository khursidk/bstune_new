import React, { useState, useEffect } from "react";
import { Button, Alert } from "@mui/material";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const Artists = () => {
  const [label, setLabel] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const { name } = jwtDecode(token);
        setLabel(name);
      } catch (error) {
        console.error("Invalid token:", error);
      }
    }
  }, []);

  // artist relocation
  const [title, setTitle] = useState("");
  const [upc, setUpc] = useState("");
  const [isrc, setIsrc] = useState("");
  const [artist, setArtist] = useState("");
  const [instaLink, setInstaLink] = useState("");
  const [fbLink, setFbLink] = useState("");

  const artistRelocation = [
    { label: "Title", value: title, setValue: setTitle },
    { label: "UPC", value: upc, setValue: setUpc },
    { label: "ISRC", value: isrc, setValue: setIsrc },
    { label: "Artist", value: artist, setValue: setArtist },
    { label: "Instagram Link", value: instaLink, setValue: setInstaLink },
    { label: "Facebook Link", value: fbLink, setValue: setFbLink },
  ];

  // State for success and error messages
  const [relocationMessage, setRelocationMessage] = useState("");
  const [relocationError, setRelocationError] = useState(false);

  const handleRelocation = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/artistRelocation`, {
        label,
        title,
        upc,
        isrc,
        artist,
        instaLink,
        fbLink,
      });

      setTitle("");
      setUpc("");
      setIsrc("");
      setArtist("");
      setInstaLink("");
      setFbLink("");
      setRelocationMessage("Artist relocation data uploaded successfully!");
      setRelocationError(false);

      // Clear message after 3 seconds
      setTimeout(() => {
        setRelocationMessage("");
      }, 3000);
    } catch (error) {
      console.error("Failed to upload artist relocation data:", error);
      setRelocationMessage("Failed to upload artist relocation data.");
      setRelocationError(true);

      // Clear message after 3 seconds
      setTimeout(() => {
        setRelocationMessage("");
      }, 3000);
    }
  };

  // new artist
  const [newArtist, setNewArtist] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [appleMusic, setAppleMusic] = useState("");
  const [spotify, setSpotify] = useState("");

  const NewArtist = [
    { label: "Artist", value: newArtist, setValue: setNewArtist },
    { label: "Email", value: email, setValue: setEmail },
    { label: "Gender", value: gender, setValue: setGender },
    { label: "Apple Music Link", value: appleMusic, setValue: setAppleMusic },
    { label: "Spotify Link", value: spotify, setValue: setSpotify },
  ];

  // State for success and error messages
  const [newArtistMessage, setNewArtistMessage] = useState("");
  const [newArtistError, setNewArtistError] = useState(false);

  const handleNewArtist = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/newArtist`, {
        label,
        email,
        gender,
        artist: newArtist,
        appleMusic,
        spotify,
      });

      setNewArtist("");
      setEmail("");
      setGender("");
      setAppleMusic("");
      setSpotify("");
      setNewArtistMessage("New artist profile created successfully!");
      setNewArtistError(false);

      // Clear message after 3 seconds
      setTimeout(() => {
        setNewArtistMessage("");
      }, 3000);
    } catch (error) {
      console.error("Failed to upload artist relocation data:", error);
      setNewArtistMessage("Failed to create new artist profile.");
      setNewArtistError(true);

      // Clear message after 3 seconds
      setTimeout(() => {
        setNewArtistMessage("");
      }, 3000);
    }
  };

  return (
    <>
      <div className="artist_Solution" style={{ display: "flex", justifyContent: "center", gap: "100px" }}>
        <div className="artistRelocation">
          <form onSubmit={handleRelocation} style={{ display: "flex", flexDirection: "column", gap: "20px", padding: "20px" }}>
            <h1 style={{ textAlign: "center", marginTop: "50px", color: "#ff0000" }}>
              <span style={{ color: "black" }}>Artist</span> Relocation
            </h1>
            {artistRelocation.map(({ label, value, setValue }, index) => (
              <React.Fragment key={`relocation-${index}`}>
                <label>{label}</label>
                <input
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  style={{
                    fontSize: "20px",
                    outline: "none",
                    padding: "10px",
                    borderRadius: "40px",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    backgroundColor: "#e8f0ff",
                    border: "1px solid #ccc",
                    color: "#333",
                  }}
                  required
                />
              </React.Fragment>
            ))}
            <Button type="submit" variant="contained" sx={{ bgcolor: "#ff0000", color: "white", textTransform: "none", "&:hover": { backgroundColor: "#cc0000" } }}>
              Upload
            </Button>
            {relocationMessage && (
              <Alert severity={relocationError ? "error" : "success"} style={{ marginTop: "20px",width:"200px" }}>
                {relocationMessage}
              </Alert>
            )}
          </form>
        </div>

        <div className="newArtist">
          <form onSubmit={handleNewArtist} style={{ display: "flex", flexDirection: "column", gap: "20px", padding: "20px" }}>
            <h1 style={{ textAlign: "center", marginTop: "50px", color: "#ff0000" }}>
              <span style={{ color: "black" }}>New</span> Artist Profile
            </h1>
            {NewArtist.map(({ label, value, setValue }, index) => (
              <React.Fragment key={`new-artist-${index}`}>
                <label>{label}</label>
                <input
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  style={{
                    fontSize: "20px",
                    outline: "none",
                    padding: "10px",
                    borderRadius: "40px",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    backgroundColor: "#e8f0ff",
                    border: "1px solid #ccc",
                    color: "#333",
                  }}
                  required
                />
              </React.Fragment>
            ))}
            <Button type="submit" variant="contained" sx={{ bgcolor: "#ff0000", color: "white", textTransform: "none", "&:hover": { backgroundColor: "#cc0000" } }}>
              Upload
            </Button>
            {newArtistMessage && (
              <Alert severity={newArtistError ? "error" : "success"} style={{ marginTop: "20px",width:"200px" }}>
                {newArtistMessage}
              </Alert>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Artists;
