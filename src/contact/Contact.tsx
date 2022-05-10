import React, { useRef } from "react"
import "./contact.css"
import { MdMail } from "react-icons/md"
import { RiMessengerFill } from "react-icons/ri"
import { FaDiscord } from "react-icons/fa"
import emailjs from "emailjs-com"

const Contact: React.FC<{}> = ({}) => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_2a1qt42",
        "template_75sw86h",
        form.current,
        "EjCFNwQLX8n-vBrZa"
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )

    e.target.reset()
  }
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5 className="contact__option-text">aarontran.wa@gmail.com</h5>
            <a href="mailto:aarontran.wa@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerFill className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5 className="contact__option-text">Aaron Tran</h5>
            <a href="https://m.me/aaron.tran.9" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FaDiscord className="contact__option-icon" />
            <h4>Discord</h4>
            <h5 className="contact__option-text">Aron</h5>
            <a
              href="https://discordapp.com/users/197194729710944256"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows={7}
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
