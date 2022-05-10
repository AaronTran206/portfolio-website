import React, { useEffect } from "react"
import "./header.css"
import CTA from "./CTA"
import HeaderSocials from "./HeaderSocials"

// const getHeaderLetters = (
//   string1: string,
//   string2: string,
//   string3: string
// ) => {
//   const updatedStr1 = [...string1].map((letter) => <h5>letter</h5>)
//   const updatedStr2 = [...string2].map((letter) => <h1>letter</h1>)
//   const updatedStr3 = [...string3].map((letter) => (
//     <h5 className="text-light">letter</h5>
//   ))
// }

// getHeaderLetters(`Hello I'm`, `Aaron Tran`, `Frontend Developer`)

const Header: React.FC<{}> = ({}) => {
  const refs = []

  useEffect(() => {
    //get header elements
    const me = document.querySelector(".me")
    const headerContainer = document.querySelector("header")
    const headerSocials = document.querySelector(".header__socials")
    const scrollDown = document.querySelector(".scroll__down")
    //push into empty refs array
    // refs.push(me)
    refs.push(headerContainer)
    // refs.push(headerSocials)
    // refs.push(scrollDown)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          } else {
            console.log(entry.target.classList)
            entry.target.classList.add("appear")
            console.log(entry.target.classList)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0 }
    )
    refs.forEach((ref) => {
      observer.observe(ref)
    })
  })

  return (
    <header>
      <div className="container header__container">
        <h5 className="header__text">Hello I'm</h5>
        <h1 className="header__text">Aaron Tran</h1>
        <h5 className="header__text">Frontend Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src="profilePic.png" />
        </div>

        <a href="#portfolio" className="scroll__down">
          Portfolio
        </a>
      </div>
    </header>
  )
}

export default Header
