import React from "react"
import { BsLinkedin, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs"

const HeaderSocials: React.FC<{}> = ({}) => {
  return (
    <div className="header__socials">
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
  )
}

export default HeaderSocials
