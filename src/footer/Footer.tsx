import React from "react"
import "./footer.css"
import { BsLinkedin, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs"

const Footer: React.FC<{}> = ({}) => {
  return (
    <footer>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/tran-aaron/" target="_blank">
          <BsLinkedin />
        </a>
        <a href="https://github.com/AaronTran206" target="_blank">
          <BsGithub />
        </a>
        <a href="https://www.instagram.com/aarontran96/" target="_blank">
          <BsInstagram />
        </a>
        <a href="https://twitter.com/AaronVaughnTran" target="_blank">
          <BsTwitter />
        </a>
      </div>
    </footer>
  )
}

export default Footer
