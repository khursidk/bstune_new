import React, { useEffect, useState } from 'react';
import { Accordion, AccordionActions, AccordionSummary, AccordionDetails, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from 'axios';

export default function UserData() {
    const [userData, setUserData] = useState([]);

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

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this user and all its data?")) return;

        try {
            await axios.delete(`${import.meta.env.VITE_API_URL}/api/user/deleteUser/${id}`);
            setUserData((prevData) => prevData.filter((user) => user._id !== id));
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <div>
            {userData.length === 0 ? (
                <p>No data available</p>
            ) : (
                userData.slice().reverse().map((data) => (
                    <Accordion key={data._id}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel-content" id="panel-header">
                            User Name: {data.name} || Email: {data.email} || Password: {data.password} || Created On: {new Date(data.createdAt).toLocaleString()}
                        </AccordionSummary>
                        <AccordionDetails>
                            {data.songs.length > 0 ? (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    {data.songs.map((song, index) => (
                                        <div key={index} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
                                            <h4>Song {index + 1}</h4>
                                            <p><strong>Label:</strong> {song.label}</p>
                                            <p><strong>Title:</strong> {song.title}</p>
                                            <p><strong>Artist:</strong> {song.artist}</p>
                                            <p><strong>Release Type:</strong> {song.releaseType}</p>
                                            <p><strong>Primary Genre:</strong> {song.primaryGenre}</p>
                                            <p><strong>Sub Genre:</strong> {song.subGenre}</p>
                                            <p><strong>C Line:</strong> {song.cLine}</p>
                                            <p><strong>P Line:</strong> {song.pLine}</p>
                                            <p><strong>Language:</strong> {song.language}</p>
                                            <p><strong>Sale Start Date:</strong> {song.saleStartDate}</p>
                                            <p><strong>Producer:</strong> {song.producer}</p>
                                            <p><strong>Composer:</strong> {song.composer}</p>
                                            <p><strong>Lyricist:</strong> {song.lyricist}</p>
                                            <p><strong>Caller Tune Duration:</strong> {song.callerTuneDuration}</p>
                                            <p>
                                                <strong>Poster:</strong>
                                                <img src={`${import.meta.env.VITE_API_URL}/${song.poster}`} alt={`${song.title} poster`} style={{ width: '50px', height: '50px', marginLeft: '10px' }} />
                                                <br />
                                                <a href={`${import.meta.env.VITE_API_URL}/${song.poster}`} download>Download Poster</a>
                                            </p>
                                            <p>
                                                <strong>Audio:</strong>
                                                <audio controls src={`${import.meta.env.VITE_API_URL}/${song.audio}`} />
                                                <br />
                                                <a href={`${import.meta.env.VITE_API_URL}/${song.audio}`} download>Download Audio</a>
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p>No songs available for this user.</p>
                            )}
                        </AccordionDetails>
                        <AccordionActions>
                            <Button size="small" color="secondary" onClick={() => handleDelete(data._id)}>Delete User</Button>
                        </AccordionActions>
                    </Accordion>
                ))
            )}
        </div>
    );
}
