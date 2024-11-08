import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Queries.css";

const Queries = () => {
  const [contacts, setContacts] = useState([]); // State to hold fetched contacts
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Fetch contacts from the API
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/contact`)
      .then((response) => {
        setContacts(response.data); // Set contacts state with fetched data
      })
      .catch((error) => {
        setErrorMessage('Error fetching contacts');
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  // Function to handle contact deletion
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/api/contact/${id}`); // Send DELETE request
      setContacts(contacts.filter((contact) => contact._id !== id)); // Update state to remove deleted contact
    } catch (error) {
      setErrorMessage('Error deleting contact');
      console.error('There was an error deleting the contact!', error);
    }
  };

  return (
    <>
      <h3>Customer Inquiries</h3>
      <div className="container">
        {errorMessage && <p>{errorMessage}</p>}
        {contacts.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Subject</th>
                <th>Message</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {contacts.slice().reverse().map((contact) => (
                <tr
                  key={contact._id}
                >
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.subject}</td>
                  <td>{contact.message}</td>
                  <td>{new Date(contact.createdAt).toLocaleString()}</td>
                  <td>
                    <button className='queryBtn' onClick={() => handleDelete(contact._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No queries...</p>
        )}
      </div>
    </>
  );
};

export default Queries;
