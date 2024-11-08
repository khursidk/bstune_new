import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewArtist = () => {
    const [newArtist, setNewArtist] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_API_URL}/api/newArtist`)
            .then((response) => {
                setNewArtist(response.data);
            })
            .catch((error) => {
                setErrorMessage('Error fetching data');
                console.error('There was an error fetching the data!', error);
            });
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${import.meta.env.VITE_API_URL}/api/newArtist/${id}`);
            setNewArtist(artistRelo.filter((artist) => artist._id !== id));
        } catch (error) {
            setErrorMessage('Error deleting data');
            console.error('There was an error deleting the data!', error);
        }
    };

    return (
        <div>
            {errorMessage && <p>{errorMessage}</p>}
            {newArtist.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Label</th>
                            <th>Artist</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Apple Music Link</th>
                            <th>Spotify Link</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {newArtist.slice().reverse().map((newArtist) => (
                            <tr key={newArtist._id}>
                                <td>{newArtist.label}</td>
                                <td>{newArtist.artist}</td>
                                <td>{newArtist.email}</td>
                                <td>{newArtist.gender}</td>
                                <td>{newArtist.appleMusic}</td>
                                <td>{newArtist.spotify}</td>
                                <td>{new Date(newArtist.createdAt).toLocaleString()}</td>
                                <td>
                                    <button onClick={() => handleDelete(newArtist._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No queries...</p>
            )}
        </div>
    );
};

export default NewArtist;
