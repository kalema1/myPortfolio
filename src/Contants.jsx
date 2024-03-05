import { useRef } from "react";
import emailjs from "@emailjs/browser";

/**
 * Contants component
 */
export default function Contants() {
  const form = useRef();

  function handleSendEmail(event) {
    event.preventDefault();

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
  }
  return (
    <section className="contacts-section">
      <div className="container">
        <div className="heading-container">
          <h2 className="heading-secondary">Get In Touch</h2>
          <p className="paragraph">
            Am open to new opportunities for growth in technology. My inbox is
            always open
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
            />
            <label className="paragraph">Email</label>
            <input
              className="input"
              type="email"
              name="user_email"
              placeholder="Email"
            />
            <label className="paragraph">Message</label>
            <textarea className="text-area" name="message" />
            <button className="btn">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}
