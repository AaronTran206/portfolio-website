import React from "react"
import "./services.css"
import { BsCheckLg } from "react-icons/bs"

const frontendData = [
  { service: "JavaScript" },
  { service: "TypeScript" },
  { service: "React Native" },
  { service: "ReactJS" },
  { service: "Redux" },
  { service: "Bootstrap" },
  { service: "Material UI" },
  { service: "Sass" },
  { service: "HTML" },
  { service: "CSS" },
]
const backendData = [
  { service: "NodeJS" },
  { service: "Python" },
  { service: "Express" },
  { service: "Firebase" },
  { service: "Amazon Web Services" },
]

const Services: React.FC<{}> = ({}) => {
  return (
    <section id="services" className={"services"}>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Frontend Skills</h3>
          </div>

          <ul className="service__list">
            {frontendData.map((arr, i) => (
              <li key={i}>
                <BsCheckLg className="service__list-icon" />
                <p>{arr.service}</p>
              </li>
            ))}
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Backend Skills</h3>
          </div>

          <ul className="service__list">
            {backendData.map((arr, i) => (
              <li key={i}>
                <BsCheckLg className="service__list-icon" />
                <p>{arr.service}</p>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
