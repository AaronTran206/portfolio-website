import React from "react"
import { useState, useRef, useEffect } from "react"
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
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log(entry)
        if (entry.isIntersecting) {
          console.log("working")
        }
      },
      { root: null, rootMargin: "0px", threshold: 0.1 }
    )
    if (ref.current) {
      observer.observe(ref.current)
    }
  }, [ref])
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
