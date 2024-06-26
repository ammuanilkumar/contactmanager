import React, { useState } from 'react';
import './App.css'; // Ensure the CSS file is imported

const ContactManager = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contacts, setContacts] = useState([]);

  const handleAddContact = (event) => {
    event.preventDefault();
    const newContact = { name, email };
    setContacts([...contacts, newContact]);
    setName('');
    setEmail('');
  };

  return (
    <div>
      <h1>Contact Manager</h1>
      <form onSubmit={handleAddContact}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add</button>
      </form>
      <h2>Contacts</h2>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>{contact.name} ({contact.email})</li>
        ))}
      </ul>
    </div>
  );
};

export default ContactManager;
