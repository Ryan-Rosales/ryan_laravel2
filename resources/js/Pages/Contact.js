import React, { useState, useEffect } from "react";
import "../../sass/Contact.scss"; // moved to sass folder


function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Failed to submit contact');
      }
      const newContact = await res.json();
      setContacts((prev) => [...prev, newContact]);
      setForm({ name: '', email: '', message: '' });
      alert(`Thanks, ${newContact.name}! We received your message.`);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-text">Fill out the form on this page…</p>

        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="contact-input"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="contact-input"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="contact-textarea"
            rows="5"
            required
          />
          <button type="submit" className="contact-btn">
            Send Message
          </button>
        </form>

        <hr />
        <h2>Contact List</h2>
        {loading && <p>Loading contacts...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {!loading && !error && (
          <ul>
            {contacts.map((contact) => (
              <li key={contact.id}>
                <strong>{contact.name}</strong> ({contact.email}): {contact.message}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Contact;
