import React from "react"
import { useState } from "react"
import "./nav.css"
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineBriefcase,
  HiOutlineBookOpen,
  HiOutlineMail,
} from "react-icons/hi"

import { FiThumbsUp } from "react-icons/fi"

const Nav: React.FC<{}> = ({}) => {
  const [activeNav, setActiveNav] = useState<string>("#")

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <HiOutlineHome />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <HiOutlineBookOpen />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <HiOutlineBriefcase />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <HiOutlineUser />
      </a>
      <a
        href="#testimonials"
        onClick={() => setActiveNav("#testimonials")}
        className={activeNav === "#testimonials" ? "active" : ""}
      >
        <FiThumbsUp />
      </a>

      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <HiOutlineMail />
      </a>
    </nav>
  )
}

export default Nav
