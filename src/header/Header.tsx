import React from "react"
import "./header.css"
import CTA from "./CTA"
import HeaderSocials from "./HeaderSocials"

const Header: React.FC<{}> = ({}) => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Aaron Tran</h1>
        <h5 className="text-light">Frontend Developer</h5>
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
