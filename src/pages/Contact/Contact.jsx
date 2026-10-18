import { useState } from "react";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import { contact } from "../../Data";
import "./contact.css";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const form = useRef();

  const sendMail = (e) => {
    e.preventDefault();

    const errors = {};

    if (!formData.name) errors.name = "El nombre no puede ir vacío";
    if (!formData.email)
      errors.email = "El correo electrónico no puede ir vacío";
    if (!formData.subject) errors.subject = "El asunto no puede ir vacío";
    if (!formData.message) errors.message = "El mensaje no puede ir vacío";

    if (Object.keys(errors).length > 0) {
      setMessageColor("color__red");
      setFeedbackMessage(errors);
      setTimeout(
        () =>
          setFeedbackMessage({
            name: "",
            email: "",
            subject: "",
            message: "",
          }),
        3000
      );
      return;
    }

    setStatus(null);
    setSending(true);
    emailjs
      .sendForm("service_rno1f6k", "template_ysf7oxi", form.current, {
        publicKey: "g6Ikdc3d3epCbdppV",
      })
      .then(
        () => {
          setStatus({ type: "success", text: "Mensaje enviado. Te responderé pronto." });
          setTimeout(() => setStatus(null), 5000);
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.error("Error al enviar el correo:", error);
          setStatus({
            type: "error",
            text: "No se pudo enviar el mensaje. Intenta de nuevo o escríbeme a miguelortiz.code@gmail.com.",
          });
        }
      )
      .finally(() => setSending(false));
  };

  return (
    <section className="contact section">
      <h2 className="section__title">
        contácta<span>me</span>
      </h2>
      <div className="contact__container container grid">
        <div className="contact__content grid">
          {contact.map(({ id, icon, title, data }) => (
            <div key={id} className="contact__card">
              <span className="contact__icon">{icon}</span>
              <div>
                <h3 className="contact__title">{title}</h3>
                <div className="contact__data">{data}</div>
              </div>
            </div>
          ))}
        </div>

        <form ref={form} onSubmit={sendMail} className="contact__form grid">
          <div className="contact__form__group grid">
            <div className="contact__form__div">
              <label htmlFor="name" className="contact__for__label">
                nombre completo <span>*</span>{" "}
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="contact__form__input"
                autoComplete="off"
                onChange={handleChange}
                value={formData.name}
              />
              {feedbackMessage.name && (
                <p className={`contact__message ${messageColor}`}>
                  {feedbackMessage.name}
                </p>
              )}
            </div>

            <div className="contact__form__div">
              <label htmlFor="email" className="contact__for__label">
                correo electrónico <span>*</span>{" "}
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="contact__form__input"
                autoComplete="off"
                onChange={handleChange}
                value={formData.email}
              />
              {feedbackMessage.email && (
                <p className={`contact__message ${messageColor}`}>
                  {feedbackMessage.email}
                </p>
              )}
            </div>
          </div>
          <div className="contact__form__div">
            <label htmlFor="subject" className="contact__for__label">
              asunto <span>*</span>{" "}
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              className="contact__form__input"
              autoComplete="off"
              onChange={handleChange}
              value={formData.subject}
            />
            {feedbackMessage.subject && (
              <p className={`contact__message ${messageColor}`}>
                {feedbackMessage.subject}
              </p>
            )}
          </div>
          <div className="contact__form__div">
            <label htmlFor="message" className="contact__for__label">
              mensaje <span>*</span>{" "}
            </label>
            <textarea
              name="message"
              id="message"
              className="contact__form__textarea contact__form__input"
              autoComplete="off"
              onChange={handleChange}
              value={formData.message}
            ></textarea>
            {feedbackMessage.message && (
              <p className={`contact__message ${messageColor}`}>
                {feedbackMessage.message}
              </p>
            )}
          </div>

          <div className="contact__button">
            <button type="submit" className="button" disabled={sending}>
              {sending ? "enviando..." : "enviar mensaje"}
              <span className="button__icon">
                <RiSendPlaneFill />
              </span>
            </button>
          </div>
          {status && (
            <p
              className={`contact__status ${status.type === "success" ? "color__green" : "color__red"}`}
              role="status"
            >
              {status.text}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
