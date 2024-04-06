import React, { useEffect } from "react";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  useEffect(() => {}, [name, email, message]);

  const handleNameChange = (event) => {
    setName(event.target.value);
    if (!event.target.value.trim()) {
      setNameError("Name is required");
    } else {
      setNameError("");
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    if (!event.target.value.trim()) {
      setEmailError("Email is required");
    } else {
      setEmailError("");
    }
  };
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
    if (!event.target.value.trim()) {
      setMessageError("Message is required");
    } else {
      setMessageError("");
    }
  };

  const handleNameBlur = () => {
    if (!name.trim()) {
      setNameError("Name is required");
    }
  };

  const handleEmailBlur = () => {
    if (!email.trim()) {
      setEmailError("Email is required");
    }
  };
  const handleMessageBlur = () => {
    if (!message.trim()) {
      setMessageError("Message is required");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div>
      <form className="flex flex-col gap-4 w-96" onSubmit={handleSubmit}>
        <div>
          <input
            className="w-full placeholder:text-black border-2 border-black rounded-md bg-transparent text-black p-1"
            placeholder="Name"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            required
            type="text"
            onBlur={handleNameBlur}
          />
          {nameError && <p className="text-red-600">{nameError}</p>}
        </div>
        <div>
          <input
            className="w-full placeholder:text-black border-2 border-black rounded-md bg-transparent text-black p-1"
            placeholder="Email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
            type="email"
            required
          />
          {emailError && <p className="text-red-600">{emailError}</p>}
        </div>
        <div>
          <input
            className="w-full placeholder:text-black border-2 border-black rounded-md bg-transparent text-black p-1"
            placeholder="Message"
            id="message"
            name="message"
            value={message}
            onChange={handleMessageChange}
            onBlur={handleMessageBlur}
            type="text"
            required
            multiple
          />
          {messageError && <p className="text-red-600">{messageError}</p>}
        </div>
        <button type="submit" className="border-2 border-black rounded-md bg-transparent text-black p-1">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
