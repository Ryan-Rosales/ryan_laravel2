import React, { useState, useEffect } from "react";
import "../../sass/ContactManager.scss";

function ContactManager() {
  const [contacts, setContacts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch contacts
  useEffect(() => {
    fetch("/api/contacts")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch contacts");
        return res.json();
      })
      .then((data) => {
        setContacts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleEdit = (contact) => {
    setEditingId(contact.id);
    setFormData({ name: contact.name, email: contact.email, message: contact.message });
  };

  const handleCancel = () => {
    setEditingId(null);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async (id) => {
    try {
      const res = await fetch(`/api/contacts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed to update contact");

      const updated = await res.json();
      setContacts((prev) => prev.map((c) => (c.id === id ? updated : c)));
      handleCancel();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this contact?")) return;
    try {
      const res = await fetch(`/api/contacts/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete contact");

      setContacts((prev) => prev.filter((c) => c.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="manager-container">
      <h1>Contact Manager</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && (
        <table className="manager-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                {editingId === contact.id ? (
                  <>
                    <td>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <textarea
                        name="message"
                        rows="2"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <button className="btn save" onClick={() => handleSave(contact.id)}>
                        Save
                      </button>
                      <button className="btn cancel" onClick={handleCancel}>
                        Cancel
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.message}</td>
                    <td>
                      <button className="btn edit" onClick={() => handleEdit(contact)}>
                        Edit
                      </button>
                      <button className="btn delete" onClick={() => handleDelete(contact.id)}>
                        Delete
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ContactManager;
