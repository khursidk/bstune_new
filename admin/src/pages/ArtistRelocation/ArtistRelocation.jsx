import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ArtistRelocation = () => {
    const [artistRelo, setArtistRelo] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_API_URL}/api/artistRelocation`)
            .then((response) => {
                setArtistRelo(response.data);
            })
            .catch((error) => {
                setErrorMessage('Error fetching data');
                console.error('There was an error fetching the data!', error);
            });
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${import.meta.env.VITE_API_URL}/api/artistRelocation/${id}`);
            setArtistRelo(artistRelo.filter((artist) => artist._id !== id));
        } catch (error) {
            setErrorMessage('Error deleting data');
            console.error('There was an error deleting the data!', error);
        }
    };

    return (
        <div>
            {errorMessage && <p>{errorMessage}</p>}
            {artistRelo.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Label</th>
                            <th>Title</th>
                            <th>UPC</th>
                            <th>ISRC</th>
                            <th>Artist</th>
                            <th>Instagram Link</th>
                            <th>Facebook Link</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {artistRelo.slice().reverse().map((artist) => (
                            <tr key={artist._id}>
                                <td>{artist.label}</td>
                                <td>{artist.title}</td>
                                <td>{artist.upc}</td>
                                <td>{artist.isrc}</td>
                                <td>{artist.artist}</td>
                                <td>{artist.instaLink}</td>
                                <td>{artist.fbLink}</td>
                                <td>{new Date(artist.createdAt).toLocaleString()}</td>
                                <td>
                                    <button onClick={() => handleDelete(artist._id)}>Delete</button>
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

export default ArtistRelocation;
