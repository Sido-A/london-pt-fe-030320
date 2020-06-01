import React, { useState, useEffect } from "react";

const CONTACTS_URL = "http://localhost:3000/contacts";

const Contacts = () => {
  const [contacts, setContact] = useState([]);
  const [selectedContacts, setSelectedContacts] = useState("");

  if (contacts.length === 0) {
    fetch(CONTACTS_URL)
      .then((res) => res.json())
      .then((res) => setContact(res));
  }

  const handleChange = (e) => {
    setSelectedContacts(e.target.value);
  };

  const contactsToRender =
    selectedContacts === ""
      ? contacts
      : contacts.filter((contact) =>
          contact.name.toLowerCase().match(selectedContacts.toLowerCase())
        );

  return (
    <div>
      <div className="filterWrapper">
        <label htmlFor="filter">Filter</label>
        <input id="filter" type="text" onChange={handleChange} />
      </div>

      <ul>
        {contactsToRender.map((c) => (
          <li key={c.id}>
            <p>{c.name}</p>
            <p className="company">{c.company}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
