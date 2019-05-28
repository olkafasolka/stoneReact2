import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <form action="">
          <h1 id="conId">Contact us</h1>
          <input
            type="text"
            name="name"
            className="formStyle"
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="email"
            className="formStyle"
            placeholder="Email"
            required
          />
          <input
            type="text"
            name="message"
            className="formStyle"
            placeholder="Type your message..."
            required
          />
          <a href="#" class="formButton">
            Send
          </a>
        </form>
      </div>
    );
  }
}

export default Contact;
