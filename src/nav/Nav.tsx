import React from "react"
import { useState, useEffect } from "react"
import "./nav.css"
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineBriefcase,
  HiOutlineBookOpen,
  HiOutlineMail,
} from "react-icons/hi"
import { PiWrench } from "react-icons/pi"
import { FiThumbsUp } from "react-icons/fi"

const Nav: React.FC<{}> = ({}) => {
  const [activeNav, setActiveNav] = useState<string>("#")
  const refs = []
  useEffect(() => {
    //get header and sections
    const header = document.querySelector("header")
    const sections = document.querySelectorAll("section")

    //push into refs array
    refs.push(header)
    sections.forEach((sec) => refs.push(sec))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          //if 90% of the section is visible defined below
          //guard clause
          if (!entry.isIntersecting) {
            return
          } else {
            //update the active state to the visible section
            entry.target.classList.add("appear")
            setActiveNav(`#${entry.target.id}`)
            observer.unobserve(entry.target)
          }
        })
        //root property defaults to the browser viewport
        //intersection ratio (0% of section must be visible)
      },
      { rootMargin: "50% 0px 0px 0px" }
    )

    refs.forEach((ref) => {
      observer.observe(ref)
    })

    return () => observer.disconnect()
  })

  return (
    <nav>
      <a href="#" className={activeNav === "#" ? "active" : ""}>
        <HiOutlineHome />
      </a>
      <a
        href="#portfolio"
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <HiOutlineBookOpen />
      </a>
      <a
        href="#experience"
        className={activeNav === "#experience" ? "active" : ""}
      >
        <PiWrench />
      </a>
      <a href="#services" className={activeNav === "#services" ? "active" : ""}>
        <HiOutlineBriefcase />
      </a>
      <a href="#about" className={activeNav === "#about" ? "active" : ""}>
        <HiOutlineUser />
      </a>
      <a
        href="#testimonials"
        className={activeNav === "#testimonials" ? "active" : ""}
      >
        <FiThumbsUp />
      </a>

      <a href="#contact" className={activeNav === "#contact" ? "active" : ""}>
        <HiOutlineMail />
      </a>
    </nav>
  )
}

export default Nav
