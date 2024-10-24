import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactUs() {
  const form = useRef();

  function sendEmail(event) {
    event.preventDefault();

    emailjs
      .sendForm("service_pil0oe2", "template_nzkkrrx", form.current, {
        publicKey: "AkAdxvPiwuJyK4AcK",
      })
      .then(
        () => {
          console.log("The email was sent successfully!");
        },
        (error) => {
          console.log("Failed to send the email...", error.text);
        }
      );
  }
  return (
    <div className="contactContainer">
      <form ref={form} action="" onSubmit={sendEmail}>
        <h1 className="text-center font-semibold text-5xl p-3 mb-9 shadow-md">
          Contact Us
        </h1>
        <label htmlFor="">FIRST NAME:</label>
        <br />
        <input
          type="text"
          name="user_firstname"
          className="block w-full text-xl p-3 rounded-lg"
          required
        />
        <br />

        <label htmlFor="">LAST NAME:</label>
        <br />
        <input
          type="text"
          name="user_lastname"
          className="block w-full text-xl p-3 rounded-lg"
          required
        />
        <br />

        <label htmlFor="">EMAIL ADDRESS:</label>
        <br />
        <input
          type="email"
          name="user_email"
          className="block w-full text-xl p-3 rounded-lg"
          required
        />
        <br />

        <label htmlFor="">MESSAGE:</label>
        <br />
        <textarea
          name="user_message"
          className="p-5 rounded-lg w-full lg:h-[25vh] "
        ></textarea>
        <input
          type="submit"
          value="Send"
          className="block w-full text-xl py-3 bg-slate-300 mt-4 rounded-lg shadow-lg cursor-pointer hover:text-orange-300 duration-200 hover:shadow-md hover:scale-[1.01]"
        />
      </form>
    </div>
  );
}

export default ContactUs;
