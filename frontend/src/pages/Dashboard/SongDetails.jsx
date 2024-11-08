import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const SongDetails = () => {
  const { songId } = useParams();
  const [songDetails, setSongDetails] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSongDetails = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/user/songs/${songId}`
        );
        setSongDetails(response.data);
      } catch (err) {
        setError("Failed to fetch song details. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSongDetails();
  }, [songId]);

  if (loading) return <p>Loading song details...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
    <div style={{ padding: "20px", textAlign: "left" }}>
    <h1 style={{ textAlign: "center", marginLeft: "35px" }}>
        {songDetails.title || "Untitled Song"}
    </h1>
    <ul
        style={{
        listStyle: "none",
        fontWeight: "bold",
        fontSize: "20px",
        textAlign: "left",
        border: "1px solid black",
        borderRadius: "40px",
        display:"flex",
        flexDirection: "column",
        gap:"10px",
        padding:"20px",
        marginBottom:"40px"
        }}
    >
        <li>Label : {songDetails.label || "N/A"}</li>
        <li>Artist : {songDetails.artist || "N/A"}</li>
        <li>Release Type : {songDetails.releaseType || "N/A"}</li>
        <li>Primary Genre : {songDetails.primaryGenre || "N/A"}</li>
        <li>Sub Genre : {songDetails.subGenre || "N/A"}</li>
        <li>C Line : {songDetails.cLine || "N/A"}</li>
        <li>P Line : {songDetails.pLine || "N/A"}</li>
        <li>Language : {songDetails.language || "N/A"}</li>
        <li>Sale Start Date : {songDetails.saleStartDate || "N/A"}</li>
        <li>Producer : {songDetails.producer || "N/A"}</li>
        <li>Composer : {songDetails.composer || "N/A"}</li>
        <li>Lyricist : {songDetails.lyricist || "N/A"}</li>
        <li>Caller Tune Duration : {songDetails.callerTuneDuration || "N/A"}</li>
        <li>
          Poster : <br />
          {songDetails.poster ? (
            <img
              src={`${import.meta.env.VITE_API_URL}/${songDetails.poster}`}
              alt="Poster"
              style={{ width: "200px", height: "auto", borderRadius: "10px" }}
            />
            
          ) : (
            "N/A"
          )}
        </li>
        <li>
          Audio :<br />
          {songDetails.audio ? (
            <audio controls>
              <source
                src={`${import.meta.env.VITE_API_URL}/${songDetails.audio}`}
                type="audio/mpeg"
              />
              Your browser does not support the audio element.
            </audio>
          ) : (
            "N/A"
          )}
        
        </li>
      </ul>
    </div>
    </>
  );
};

export default SongDetails;
