import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import { Alert, CircularProgress } from '@mui/material';
import styles from './DashboardCSS/newRelease.module.css';

export default function NewRelease() {
  const [audio, setAudio] = useState(null);
  const [poster, setPoster] = useState(null);
  const [label, setLabel] = useState("");
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [releaseType, setReleaseType] = useState("");
  const [primaryGenre, setPrimaryGenre] = useState("");
  const [subGenre, setSubGenre] = useState("");
  const [cLine, setCLine] = useState("");
  const [pLine, setPLine] = useState("");
  const [language, setLanguage] = useState("");
  const [saleStartDate, setSaleStartDate] = useState("");
  const [producer, setProducer] = useState("");
  const [composer, setComposer] = useState("");
  const [lyricist, setLyricist] = useState("");
  const [callerTuneDuration, setCallerTuneDuration] = useState("");
  const [alert, setAlert] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const { name, id } = jwtDecode(token);
        setLabel(name);
        setId(id);
      } catch (error) {
        console.error("Invalid token:", error);
      }
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Start loading
    const formData = new FormData();

    formData.append("label", label);
    formData.append("title", title);
    formData.append("artist", artist);
    formData.append("releaseType", releaseType);
    formData.append("primaryGenre", primaryGenre);
    formData.append("subGenre", subGenre);
    formData.append("cLine", cLine);
    formData.append("pLine", pLine);
    formData.append("language", language);
    formData.append("saleStartDate", saleStartDate);
    formData.append("producer", producer);
    formData.append("composer", composer);
    formData.append("lyricist", lyricist);
    formData.append("audio", audio);
    formData.append("callerTuneDuration", callerTuneDuration);
    formData.append("poster", poster);
    formData.append("id", id);

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/user/songs`, formData);
      setAlert({ type: 'success', message: 'Song successfully uploaded!' });
      setTimeout(() => setAlert({ type: '', message: '' }), 2000);
      setTitle("");
      setArtist("");
      setReleaseType("");
      setPrimaryGenre("");
      setSubGenre("");
      setCLine("");
      setPLine("");
      setLanguage("");
      setSaleStartDate("");
      setProducer("");
      setComposer("");
      setLyricist("");
      setCallerTuneDuration("");
      setAudio(null);
      setPoster(null);
    } catch (error) {
      console.error(error);
      setAlert({ type: 'error', message: 'Error uploading song: ' + (error.response?.data?.message || error.message) });
      setTimeout(() => setAlert({ type: '', message: '' }), 2000);
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <>
      <h1 className={styles.title}><span style={{color:"black"}}>New</span> Releases</h1>
      
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <div className={styles.gridContainer}>
          <div className={styles.inputField}>
            <label>Label:</label>
            <input type="text" name="label" value={label} disabled />
          </div>
          <div className={styles.inputField}>
            <label>Title:</label>
            <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div className={styles.inputField}>
            <label>Artist:</label>
            <input type="text" name="artist" value={artist} onChange={(e) => setArtist(e.target.value)} required />
          </div>
          <div className={styles.inputField}>
            <label>Release Type:</label>
            <select name="releaseType" value={releaseType} onChange={(e) => setReleaseType(e.target.value)} required >
              <option value="">Release Type</option>
              <option value="Single">Single</option>
              <option value="EP">EP</option>
              <option value="Album">Album</option>
            </select>
          </div>
          <div className={styles.inputField}>
            <label>Primary Genre:</label>
            <select name="primaryGenre" value={primaryGenre} onChange={(e) => setPrimaryGenre(e.target.value)} required>
              <option value="">Primary Genre</option>
              <option value="Folk">Folk</option>
              <option value="Hip Hop/Rap">Hip Hop/Rap</option>
              <option value="Indian">Indian</option>
              <option value="Pop">Pop</option>
              <option value="Inspirational">Inspirational</option>
              <option value="Jazz">Jazz</option>
              <option value="Rock">Rock</option>
              <option value="Comedy">Comedy</option>
              <option value="Classical">Classical</option>
            </select>
          </div>
          <div className={styles.inputField}>
            <label>Sub Genre:</label>
            <select name="subGenre" value={subGenre} onChange={(e) => setSubGenre(e.target.value)} required>
              <option value="">Sub Genre</option>
              <option value="Indie Dance">Indie Dance</option>
              <option value="Indie Pop">Indie Pop</option>
              <option value="Classical Crossover">Classical Crossover</option>
              <option value="Hardcore">Hardcore</option>
              <option value="Mashup">Mashup</option>
              <option value="Pop">Pop</option>
              <option value="Heartbreak">Heartbreak</option>
              <option value="Sad">Sad</option>
              <option value="Electro">Electro</option>
            </select>
          </div>
          <div className={styles.inputField}>
            <label>C Line:(eg. @YYYY  label name)</label>
            <input type="text" placeholder='eg. @YYYY  label name' name="cLine" value={cLine} onChange={(e) => setCLine(e.target.value)} required />
          </div>
          <div className={styles.inputField}>
            <label>P Line:(eg. @YYYY  label name)</label>
            <input type="text" placeholder='eg. @YYYY  label name' name="pLine" value={pLine} onChange={(e) => setPLine(e.target.value)} required />
          </div>
          <div className={styles.inputField}>
            <label>Language:</label>
            <input type="text" name="language" value={language} onChange={(e) => setLanguage(e.target.value)} required />
          </div>
          <div className={styles.inputField}>
            <label>Sale Start Date:</label>
            <input type="date" name="saleStartDate" value={saleStartDate} onChange={(e) => setSaleStartDate(e.target.value)} required />
          </div>
          <div className={styles.inputField}>
            <label>Producer:</label>
            <input type="text" name="producer"  value={producer} onChange={(e) => setProducer(e.target.value)} required />
          </div>
          <div className={styles.inputField}>
            <label>Composer:</label>
            <input type="text" name="composer"  value={composer} onChange={(e) => setComposer(e.target.value)} required />
          </div>
          <div className={styles.inputField}>
            <label>Lyricist:</label>
            <input type="text" name="lyricist"  value={lyricist} onChange={(e) => setLyricist(e.target.value)} required />
          </div>
          <div className={styles.inputField}>
            <label>Caller Tune Duration:</label>
            <input type="text" name="callerTuneDuration" placeholder="eg. 00:00 - 00:00" value={callerTuneDuration} onChange={(e) => setCallerTuneDuration(e.target.value)} required />
          </div>
          <div className={styles.inputField}>
            <label>Poster: (Only .jpg or .png and 3000 X 3000 file)</label>
            <input type="file" name="poster" accept=".jpg, .png" onChange={(e) => setPoster(e.target.files[0])} required />
          </div>
          <div className={styles.inputField}>
            <label>Audio: (Only .wav or .flac file)</label>
            <input type="file" name="audio" accept=".wav, .flac" onChange={(e) => setAudio(e.target.files[0])} required />
          </div>
        </div>
        <button type="submit" className={styles.submitButton}>Submit</button>
        {loading && <CircularProgress size={24} style={{  marginTop: '1rem' }} />}
      </form>
      {alert.message && (
        <Alert severity={alert.type} style={{  marginBottom: '1rem' }}>
          {alert.message}
        </Alert>
      )}
    </>
  );
}
