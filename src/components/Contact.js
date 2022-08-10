import React, { useState } from "react";
import "../styles/Contact.scss";

const Contact = () => {
  const [status, setStatus] = useState("Submit");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [messageText, setMessageText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { first_name, last_name, email, message } = e.target.elements;
    let details = {
      firstName: first_name.value,
      lastName: last_name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });

    setStatus("Submit");

    setFirstName("");
    setLastName("");
    setEmailAddress("");
    setPhoneNumber("");
    setMessageText("");

    let result = await response.json();
  };
  return (
    <div
      name="portfolio-contact"
      id="contact-form"
      className="container announcements"
    >
      <h2>Contact Me</h2>

      <div className="contact-card">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="first_Name"
                  name="first_name"
                  onChange={(event) => setFirstName(event.target.value)}
                  value={firstName}
                  required
                />
              </div>
            </div>

            <div className="col">
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="last_Name"
                  name="last_name"
                  onChange={(event) => setLastName(event.target.value)}
                  value={lastName}
                  required
                />
              </div>
            </div>

            <div className="col">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  onChange={(event) => setEmailAddress(event.target.value)}
                  value={emailAddress}
                  required
                />
              </div>
            </div>

            <div className="col">
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  onChange={(event) => setPhoneNumber(event.target.value)}
                  value={phoneNumber}
                />
              </div>
            </div>

            <div className="col">
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  onChange={(event) => setMessageText(event.target.value)}
                  value={messageText}
                  required
                ></textarea>
              </div>
            </div>

            <div className="col">
              <button type="submit">{status}</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
