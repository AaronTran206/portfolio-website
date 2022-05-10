import React from "react"
import { useState, useRef, createRef, useEffect } from "react"
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
        for (let entry of entries) {
          //if 90% of the section is visible defined below
          if (entry.isIntersecting) {
            //update the active state to the visible section
            console.log(`#${entry.target.id}`)
            setActiveNav(`#${entry.target.id}`)
            observer.unobserve(entry.target)
          }
        }
        //root property defaults to the browser viewport
        //intersection ratio (90% of section must be visible)
      },
      { threshold: 0.9 }
    )

    refs.forEach((ref) => {
      observer.observe(ref)
    })

    return refs.forEach((ref) => ref.current && observer.unobserve(ref.current))
  })

  return (
    <nav>
      <a
        href="#"
        // onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <HiOutlineHome />
      </a>
      <a
        href="#portfolio"
        // onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <HiOutlineBookOpen />
      </a>
      <a
        href="#services"
        // onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <HiOutlineBriefcase />
      </a>
      <a
        href="#about"
        // onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <HiOutlineUser />
      </a>
      <a
        href="#testimonials"
        // onClick={() => setActiveNav("#testimonials")}
        className={activeNav === "#testimonials" ? "active" : ""}
      >
        <FiThumbsUp />
      </a>

      <a
        href="#contact"
        // onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <HiOutlineMail />
      </a>
    </nav>
  )
}

export default Nav
