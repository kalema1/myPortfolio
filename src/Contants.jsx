import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

/**
 * Contants component
 */
export default function Contants() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  /**
   * sends email on submit
   * @param {event} - submit event
   */
  function handleSendEmail(event) {
    event.preventDefault();

    if (!name || !email || !message) {
      throw new Error("input fields are required");
    }

    emailjs
      .sendForm("service_kdkd3gh", "template_2uhrljg", form.current, {
        publicKey: "lNx1paLr6HW7LUWvl",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    setName("");
    setEmail("");
    setMessage("");
  }
  return (
    <section className="contacts-section" id="contact">
      <div className="container">
        <div className="heading-container">
          <h2 className="heading-secondary">Get In Touch</h2>
          <p className="paragraph">
            Am open to new opportunities for growth in technology. My inbox is
            always open.
          </p>
        </div>
        <div className="contact-form-container">
          <form ref={form} onSubmit={handleSendEmail}>
            <label className="paragraph">Name</label>
            <input
              className="input"
              type="text"
              name="user_name"
              placeholder="Full Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <label className="paragraph">Email</label>
            <input
              className="input"
              type="email"
              name="user_email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <label className="paragraph">Message</label>
            <textarea
              className="text-area"
              name="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
            <button className="btn">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}
